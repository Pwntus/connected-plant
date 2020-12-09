import API from '@aws-amplify/api'
import SWorker from 'simple-web-worker'
import * as t from '@/store/types'
import { get } from 'lodash-es'

const worker = SWorker.create([
  {
    message: 'set_histogram',
    func: buckets => {
      return buckets
        .filter(bucket => {
          return (
            bucket.key &&
            bucket.air_heat_index &&
            bucket.air_humidity &&
            bucket.air_temperature &&
            bucket.soil_moisture &&
            bucket.soil_temperature
          )
        })
        .map(bucket => {
          return {
            timestamp: bucket.key,
            air_heat_index: parseFloat(bucket.air_heat_index.value.toFixed(2)),
            air_humidity: parseFloat(bucket.air_humidity.value.toFixed(2)),
            air_temperature: parseFloat(
              bucket.air_temperature.value.toFixed(2)
            ),
            soil_moisture: parseFloat(bucket.soil_moisture.value.toFixed(2)),
            soil_temperature: parseFloat(
              bucket.soil_temperature.value.toFixed(2)
            )
          }
        })
    }
  }
])

const state = {
  latest: {
    timestamp: null,
    air_heat_index: null,
    air_humidity: null,
    air_temperature: null,
    soil_moisture: null,
    soil_temperature: null
  },
  histogram: []
}

const mutations = {
  [t.APP_SET_LATEST](state, payload) {
    if (!payload) return

    const timestamp = get(
      payload,
      'timestamp',
      Math.round(new Date().getTime() / 1000)
    )
    const air_heat_index = parseFloat(get(payload, 'plant.air_heat_index', 0.0))
    const air_humidity = parseFloat(get(payload, 'plant.air_humidity', 0.0))
    const air_temperature = parseFloat(
      get(payload, 'plant.air_temperature', 0.0)
    )
    const soil_moisture = parseFloat(get(payload, 'plant.soil_moisture', 0.0))
    const soil_temperature = parseFloat(
      get(payload, 'plant.soil_temperature', 0.0)
    )

    state.latest = {
      timestamp,
      air_heat_index,
      air_humidity,
      air_temperature,
      soil_moisture,
      soil_temperature
    }
  },
  [t.APP_SET_HISTOGRAM](state, payload) {
    state.histogram = payload
  }
}

const actions = {
  message({ commit }, { value }) {
    try {
      const { reported } = JSON.parse(JSON.stringify(value.state))
      commit(t.APP_SET_LATEST, reported)
    } catch (e) {
      console.log(e)
    }
  },
  async getLatest({ commit }) {
    let result = null // Default value

    try {
      const response = await API.get(process.env.VUE_APP_API_NAME, '/things', {
        queryStringParameters: {
          thingName: process.env.VUE_APP_MIC_THING_NAME
        }
      })
      result = response.shadow.state.reported
      result.timestamp = response.shadow.timestamp
    } catch (e) {
      throw e
    } finally {
      commit(t.APP_SET_LATEST, result)
    }
  },
  async getHistogram({ commit }) {
    try {
      const response = await API.post(
        process.env.VUE_APP_API_NAME,
        '/observations/find',
        {
          body: {
            queryScope: {
              thingTypes: [process.env.VUE_APP_MIC_THING_TYPE]
            },
            query: {
              size: 0,
              query: {
                bool: {
                  filter: [
                    {
                      term: {
                        thingName: process.env.VUE_APP_MIC_THING_NAME
                      }
                    },
                    {
                      range: {
                        timestamp: {
                          gte: +new Date() - 24 * 60 * 60 * 1000, // 24 hours
                          lte: +new Date()
                        }
                      }
                    }
                  ]
                }
              },
              aggs: {
                hist: {
                  date_histogram: {
                    field: 'timestamp',
                    interval: '5m',
                    time_zone: '+01:00',
                    min_doc_count: 1,
                    extended_bounds: {}
                  },
                  aggs: {
                    air_heat_index: {
                      avg: { field: 'state.plant.air_heat_index' }
                    },
                    air_humidity: {
                      avg: { field: 'state.plant.air_humidity' }
                    },
                    air_temperature: {
                      avg: { field: 'state.plant.air_temperature' }
                    },
                    soil_moisture: {
                      avg: { field: 'state.plant.soil_moisture' }
                    },
                    soil_temperature: {
                      avg: { field: 'state.plant.soil_temperature' }
                    }
                  }
                }
              }
            }
          }
        }
      )

      const buckets = response.aggregations.hist.buckets
      const worker_result = await worker.postMessage('set_histogram', [buckets])
      commit(t.APP_SET_HISTOGRAM, worker_result)
    } catch (e) {
      throw e
    }
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
