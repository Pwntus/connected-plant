(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/connected-plant/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e7c":function(t,e,a){t.exports=a.p+"media/logo.4ed648d9.webm"},1:function(t,e){},10:function(t,e){},"16fe":function(t,e,a){"use strict";a("4500")},2:function(t,e){},3:function(t,e){},4:function(t,e){},4500:function(t,e,a){},4678:function(t,e,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id="4678"},5:function(t,e){},5303:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r,s,n=a("2b0e"),i=a("8c4f"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("init-app"),r("v-row",{staticClass:"py-12 mb-12",attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"3"}},[r("video",{attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:a("0e7c"),type:"video/webm"}}),r("img",{attrs:{src:a("cf05")}})])]),r("v-col",{attrs:{cols:"12",md:"9",lg:"6"}},[r("div",{staticClass:"text-h2 font-weight-bold mb-8"},[t._v("Hi, I'm an LTE-M connected plant.")]),r("div",{staticClass:"text-h6 font-weight-light grey--text text--lighten-2 mb-10"},[t._v("I send data every 30s about my surroundings and well-being so that my human can hopefully take care of me.")]),r("a",{staticClass:"text-h6 font-weight-bold",attrs:{href:"https://github.com/Pwntus/connected-plant",title:"Pwntus/connected-plant",target:"_new"}},[r("v-icon",{staticClass:"mb-1",attrs:{left:"",dark:"",large:""}},[t._v("mdi-github")]),t._v("Check out how I was made on GitHub")],1)]),r("v-spacer")],1),r("v-row",{staticClass:"mb-6 pt-12",attrs:{"no-gutters":""}},[r("v-col",[r("div",{staticClass:"text-h4 font-weight-bold"},[t._v("My current stats")])]),r("v-col",{staticClass:"text-right"},[t.last_updated?r("v-chip",{attrs:{color:"grey",outlined:"",small:""}},[r("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-refresh")]),t._v("Updated "+t._s(t.last_updated))],1):t._e()],1),r("v-col",{staticClass:"mt-3",attrs:{cols:"12"}},[r("div",{staticClass:"text-subtitle-1 font-weight-light grey--text text--lighten-2"},[t._v("Latest reported value, updated live")])])],1),r("v-row",{staticClass:"pb-12",attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[r("gauge",{staticClass:"square",attrs:{config:t.gauge_soil_moisture}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[r("gauge",{staticClass:"square",attrs:{config:t.gauge_soil_temperature}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[r("gauge",{staticClass:"square",attrs:{config:t.gauge_air_humidity}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[r("gauge",{staticClass:"square",attrs:{config:t.gauge_air_temperature}})],1)],1),r("v-row",{staticClass:"mt-8"}),r("v-row",{staticClass:"pt-12 mt-12 mb-4",attrs:{"no-gutters":""}},[r("v-col",[r("div",{staticClass:"text-h4 font-weight-bold"},[t._v("Stats over time")])]),r("v-col",{staticClass:"text-right"},[t.last_updated_histogram?r("v-chip",{attrs:{color:"grey",outlined:"",small:""}},[r("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-refresh")]),t._v("Updated "+t._s(t.last_updated_histogram))],1):t._e()],1),r("v-col",{staticClass:"mt-3",attrs:{cols:"12"}},[r("div",{staticClass:"text-subtitle-1 font-weight-light grey--text text--lighten-2"},[t._v("As viewed over 24h, aggregated over 5m")])])],1),r("v-row",{staticClass:"pb-12",attrs:{align:"center",justify:"center"}},[r("v-col",{staticClass:"my-6",attrs:{cols:"12",md:"6"}},[r("graph",{staticClass:"rectangle",attrs:{config:t.graph_soil_moisture}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("graph",{staticClass:"rectangle",attrs:{config:t.graph_soil_temperature}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("graph",{staticClass:"rectangle",attrs:{config:t.graph_air_humidity}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("graph",{staticClass:"rectangle",attrs:{config:t.graph_air_temperature}})],1)],1)],1)},c=[],l=(a("d81d"),a("2f62")),u=a("c1df"),d=a.n(u),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"init-app"}})},p=[],h=(a("a4d3"),a("96cf"),a("1da1")),m=a("5530"),g={chart:{backgroundColor:"transparent"},boost:{seriesThreshold:50},title:null,tooltip:{enabled:!1},credits:{enabled:!1},legend:{enabled:!1,itemStyle:{fontWeight:"normal",color:"#FFF"},itemHoverStyle:{color:"#FFF"}},time:{timezoneOffset:-60},xAxis:{lineColor:"#161616",gridLineColor:"#161616",tickColor:"#161616",labels:{style:{color:"#FFF"}}},yAxis:{title:null,lineColor:"#161616",gridLineColor:"#161616",labels:{style:{color:"#FFF"}}},colors:["#FFF"]},b=("thing-update/telenor.no/Tuvas/".concat("00001508"),{HIGHCHARTS_GLOBAL:g,MQTT_TOPIC:"thing-update/telenor.no/Tuvas/".concat("00001508")}),v=b,j=Object(m["a"])({},v),_=a("d4ec"),y=a("bee2"),x=a("18eb"),w=a("00ef"),O=a("5473"),k=a("cbf3"),C=function(){function t(){Object(_["a"])(this,t),this.instances=[]}return Object(y["a"])(t,[{key:"attachIotPolicy",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w["default"].currentCredentials();case 3:e=t.sent,x["default"].addPluggable(new k["AWSIoTProvider"]({aws_pubsub_region:"eu-west-1",aws_pubsub_endpoint:"wss://".concat("a15nxxwvsld4o-ats.iot.eu-west-1.amazonaws.com","/mqtt"),credentials:e})),t.next=10;break;case 7:throw t.prev=7,t.t0=t["catch"](0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"subscribe",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.attachIotPolicy();case 3:O["b"].subscribe(e).subscribe({next:function(t){a&&a(t)},error:function(t){return console.error(t)},close:function(){return console.log("Done")}}),t.next=9;break;case 6:throw t.prev=6,t.t0=t["catch"](0),t.t0;case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"kill",value:function(){for(var t in this.instances)this.instances[t].unsubscribe(),delete this.instances[t]}}]),t}(),F=new C,z={name:"InitApp",data:function(){return{proc:null,timeout:null}},methods:Object(m["a"])(Object(m["a"])({},Object(l["b"])("Cognito",["signInUser"])),Object(l["b"])("App",["message","getLatest","getHistogram"])),mounted:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,t.signInUser({username:"api_user_tno",password:"1q2w3e4rQ"});case 4:return F.subscribe([j.MQTT_TOPIC],(function(e){var a=e.value;try{var r=Object.getOwnPropertySymbols(a).map((function(t){return a[t]}))[0];t.message({topic:r,value:a})}catch(s){console.log(s)}})),e.next=7,t.getLatest();case 7:return e.next=9,t.getHistogram();case 9:t.proc=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getHistogram();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))),t.timeout=setInterval(t.proc,3e5);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0),alert("Failed to init app!");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()},beforeDestroy:function(){clearInterval(this.timeout)}},T=z,S=a("2877"),A=Object(S["a"])(T,f,p,!1,null,null,null),I=A.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gauge",class:{visible:null!==t.config.value}},[a("vue-circle",{ref:"roundGauge",attrs:{progress:t.percent,fill:{color:t.threshold.color},size:300,thickness:15,"line-cap":"round","empty-fill":"rgba(0, 0, 0, .3)","insert-mode":"append","show-percent":!1}},[a("div",{staticClass:"font-weight-light",style:{color:t.threshold.color}},[t._v(t._s(t.threshold.text)),a("br"),a("b",[t._v(t._s(t.config.value)+" "+t._s(t.config.suffix))])])]),a("div",{staticClass:"font-weight-light"},[t._v(t._s(t.config.title))])],1)},R=[],H=a("b85c"),M=a("9de6"),L={name:"Gauge",props:["config"],components:{VueCircle:M["a"]},watch:{config:{deep:!0,handler:function(){this.$refs.roundGauge.updateProgress(this.percent),this.$refs.roundGauge.updateFill(this.threshold.color)}}},computed:{percent:function(){var t=this.config.value/this.config.max;return t=t>100?100:t,100*t},threshold:function(){var t,e={text:"",class:"green"},a=Object(H["a"])(this.config.thresholds);try{for(a.s();!(t=a.n()).done;){var r=t.value;this.config.value<r.th&&(e=r)}}catch(s){a.e(s)}finally{a.f()}return e}}},N=L,q=(a("dd92"),Object(S["a"])(N,P,R,!1,null,null,null)),D=q.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart",class:{visible:null!==t.config.data}},[a("highcharts",{ref:"chart",staticClass:"hc",attrs:{options:t.chartOptions}})],1)},G=[],V=a("a1a3"),$=(a("99af"),a("2909")),W=a("ea7f"),J=a.n(W),U=a("2ad6"),B=a.n(U),Q={name:"Highcharts",template:'<div ref="chart"></div>',render:function(t){return t("div",{ref:"chart"})},props:{constructorType:{type:String,default:"chart"},options:{type:Object,required:!0},callback:Function,updateArgs:{type:Array,default:function(){return[!0,!0]}}},data:function(){return{resizeSensor:null}},watch:{options:{handler:function(t){var e;(e=this.chart).update.apply(e,[Object.assign({},t)].concat(Object($["a"])(this.updateArgs)))},deep:!0}},methods:{onResize:function(){this.$refs.chart.chart&&this.$refs.chart.chart.reflow()}},mounted:function(){this.options&&J.a[this.constructorType]&&(this.chart=J.a[this.constructorType](this.$refs.chart,Object.assign({},this.options),this.callback?this.callback:null)),this.resizeSensor=new B.a(this.$el,this.onResize),this.onResize()},beforeDestroy:function(){this.chart&&this.chart.destroy(),this.resizeSensor.detach()}},X=Q,K=Object(S["a"])(X,r,s,!1,null,null,null),Z=K.exports,Y={name:"Chart",props:["config"],components:{Highcharts:Z},data:function(){return{globalOptions:JSON.parse(JSON.stringify(j.HIGHCHARTS_GLOBAL)),chartOptions:{}}},watch:{config:{deep:!0,handler:function(){this.setOptions()}}},methods:{setOptions:function(){var t={title:{text:this.config.title,align:"left",style:{color:"#FFF",fontSize:"15px"}},series:[{name:"Data",type:"spline",data:this.config.data}],colors:[this.config.color],plotOptions:{spline:{lineWidth:2,turboThreshold:0,animation:{duration:0},marker:{radius:2,enabledThreshold:3},dataLabels:{enabled:!0,format:"{point.y} "+this.config.suffix,color:this.config.color,backgroundColor:"transparent",padding:15,style:{textOutline:0}}}},tooltip:{enabled:!0,animation:!1,valueDecimals:2,backgroundColor:"rgba(255, 255, 255, 0.9)",hideDelay:0,shadow:!1,padding:16,useHTML:!0,borderWidth:0,borderRadius:5,headerFormat:"",pointFormat:'\n            <table cellspacing="0" cellpadding="0" style="border:none;color:#000">\n              <tr>\n                <td style="padding-right:8px;text-align:right">{series.name}:</td>\n                <td style="font-weight:bold;text-align:left;color:#0c2231">{point.y} NOK</td>\n              </tr>\n              <tr>\n                <td style="padding:4px 8px 0 0;text-align:right">I omløp (ca):</td>\n                <td style="padding-top:4px;font-weight:bold;text-align:left;color:#0c2231">{point.n}st</td>\n              </tr>\n            </table>'},xAxis:{type:"datetime",labels:{style:{color:"#e0e0e0"}}},yAxis:{min:this.config.min,max:this.config.max,endOnTick:!1,labels:{style:{color:"#e0e0e0"}}}};this.chartOptions=Object(V["a"])(this.globalOptions,t)}}},tt=Y,et=(a("a8d7"),Object(S["a"])(tt,E,G,!1,null,"4057f2d4",null)),at=et.exports,rt={name:"Home",components:{InitApp:I,Gauge:D,Graph:at},data:function(){return{last_updated:null,last_updated_histogram:null,last_updated_timeout:null,gauge_soil_moisture:{value:null,min:0,max:100,title:"Soil Moisture",suffix:"%",thresholds:[{th:100,text:"Very wet",color:"#61aa02"},{th:75,text:"Wet",color:"#ff9900"},{th:50,text:"Dry",color:"#ff0000"},{th:25,text:"Very dry",color:"#990099"}]},gauge_soil_temperature:{value:null,min:0,max:60,title:"Soil Temperature",suffix:"°C",thresholds:[{th:100,text:"Warm",color:"#ff0000"},{th:22.1,text:"Moderate",color:"#61aa02"},{th:20,text:"Cold",color:"#071b54"},{th:15,text:"Very cold",color:"#990099"}]},gauge_air_humidity:{value:null,min:0,max:100,title:"Air Humidity",suffix:"%",thresholds:[{th:100,text:"Very humid",color:"#071b54"},{th:75,text:"Humid",color:"#ff9900"},{th:50,text:"Comfortable",color:"#61aa02"},{th:30,text:"Dry",color:"#990099"}]},gauge_air_temperature:{value:null,min:0,max:60,title:"Air Temperature",suffix:"°C",thresholds:[{th:100,text:"Warm",color:"#ff0000"},{th:22,text:"Moderate",color:"#61aa02"},{th:20,text:"Cold",color:"#071b54"},{th:15,text:"Very cold",color:"#990099"}]},graph_soil_moisture:{data:null,title:"Soil Moisture",suffix:"%",color:"#61aa02",min:0,max:100},graph_soil_temperature:{data:null,title:"Soil Temperature",suffix:"°C",color:"#61aa02",min:0,max:60},graph_air_humidity:{data:null,title:"Air Humidity",suffix:"%",color:"#61aa02",min:0,max:100},graph_air_temperature:{data:null,title:"Air Temperature",suffix:"°C",color:"#61aa02",min:0,max:60}}},computed:Object(l["c"])("App",["latest","histogram"]),watch:{latest:function(t){this.gauge_soil_moisture.value=t.soil_moisture,this.gauge_soil_temperature.value=t.soil_temperature,this.gauge_air_humidity.value=t.air_humidity,this.gauge_air_temperature.value=t.air_temperature,this.last_updated=d.a.unix(t.timestamp).fromNow()},histogram:function(t){if(this.graph_soil_moisture.data=t.map((function(t){var e=t.timestamp,a=t.soil_moisture;return{x:e,y:a}})),this.graph_soil_temperature.data=t.map((function(t){var e=t.timestamp,a=t.soil_temperature;return{x:e,y:a}})),this.graph_air_humidity.data=t.map((function(t){var e=t.timestamp,a=t.air_humidity;return{x:e,y:a}})),this.graph_air_temperature.data=t.map((function(t){var e=t.timestamp,a=t.air_temperature;return{x:e,y:a}})),!(t.length<=0)){var e=t[t.length-1].timestamp;this.last_updated_histogram=d.a.unix(e/1e3).fromNow()}}},mounted:function(){var t=this;this.last_updated_timeout=setInterval((function(){if(t.latest.timestamp&&(t.last_updated=d.a.unix(t.latest.timestamp).fromNow()),!(t.histogram.length<=0)){var e=t.histogram[t.histogram.length-1].timestamp;e&&(t.last_updated_histogram=d.a.unix(e/1e3).fromNow())}}),1e3)},beforeDestroy:function(){clearInterval(this.last_updated_timeout)}},st=rt,nt=(a("16fe"),a("6544")),it=a.n(nt),ot=a("cc20"),ct=a("62ad"),lt=a("a523"),ut=a("132d"),dt=a("0fd9"),ft=a("2fa4"),pt=Object(S["a"])(st,o,c,!1,null,"75610f06",null),ht=pt.exports;it()(pt,{VChip:ot["a"],VCol:ct["a"],VContainer:lt["a"],VIcon:ut["a"],VRow:dt["a"],VSpacer:ft["a"]}),n["a"].use(i["a"]);var mt,gt=[{path:"/",name:"Home",component:ht}],bt=new i["a"]({mode:"history",base:"/connected-plant/",routes:gt}),vt=bt,jt=a("a020"),_t=a.n(jt),yt=(a("4de4"),a("b680"),a("ade3")),xt=a("1b29"),wt=a("cfca"),Ot=a.n(wt),kt="APP_SET_LATEST",Ct="APP_SET_HISTOGRAM",Ft=a("ec41"),zt=Ot.a.create([{message:"set_histogram",func:function(t){return t.filter((function(t){return t.key&&t.air_heat_index&&t.air_humidity&&t.air_temperature&&t.soil_moisture&&t.soil_temperature})).map((function(t){return{timestamp:t.key,air_heat_index:parseFloat(t.air_heat_index.value.toFixed(2)),air_humidity:parseFloat(t.air_humidity.value.toFixed(2)),air_temperature:parseFloat(t.air_temperature.value.toFixed(2)),soil_moisture:parseFloat(t.soil_moisture.value.toFixed(2)),soil_temperature:parseFloat(t.soil_temperature.value.toFixed(2))}}))}}]),Tt={latest:{timestamp:null,air_heat_index:null,air_humidity:null,air_temperature:null,soil_moisture:null,soil_temperature:null},histogram:[]},St=(mt={},Object(yt["a"])(mt,kt,(function(t,e){if(e){var a=Object(Ft["a"])(e,"timestamp",Math.round((new Date).getTime()/1e3)),r=parseFloat(Object(Ft["a"])(e,"plant.air_heat_index",0)),s=parseFloat(Object(Ft["a"])(e,"plant.air_humidity",0)),n=parseFloat(Object(Ft["a"])(e,"plant.air_temperature",0)),i=parseFloat(Object(Ft["a"])(e,"plant.soil_moisture",0)),o=parseFloat(Object(Ft["a"])(e,"plant.soil_temperature",0));t.latest={timestamp:a,air_heat_index:r,air_humidity:s,air_temperature:n,soil_moisture:i,soil_temperature:o}}})),Object(yt["a"])(mt,Ct,(function(t,e){t.histogram=e})),mt),At={message:function(t,e){var a=t.commit,r=e.value;try{var s=JSON.parse(JSON.stringify(r.state)),n=s.reported;a(kt,n)}catch(i){console.log(i)}},getLatest:function(t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,r=null,e.prev=2,e.next=5,xt["a"].get("prod","/things",{queryStringParameters:{thingName:"00001508"}});case 5:s=e.sent,r=s.shadow.state.reported,r.timestamp=Object(Ft["a"])(s,"shadow.metadata.reported.plant.type.timestamp",0),e.next=13;break;case 10:throw e.prev=10,e.t0=e["catch"](2),e.t0;case 13:return e.prev=13,a(kt,r),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})))()},getHistogram:function(t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var a,r,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.prev=1,e.next=4,xt["a"].post("prod","/observations/find",{body:{queryScope:{thingTypes:["362"]},query:{size:0,query:{bool:{filter:[{term:{thingName:"00001508"}},{range:{timestamp:{gte:+new Date-864e5,lte:+new Date}}}]}},aggs:{hist:{date_histogram:{field:"timestamp",interval:"5m",time_zone:"+01:00",min_doc_count:1,extended_bounds:{}},aggs:{air_heat_index:{avg:{field:"state.plant.air_heat_index"}},air_humidity:{avg:{field:"state.plant.air_humidity"}},air_temperature:{avg:{field:"state.plant.air_temperature"}},soil_moisture:{avg:{field:"state.plant.soil_moisture"}},soil_temperature:{avg:{field:"state.plant.soil_temperature"}}}}}}}});case 4:return r=e.sent,s=r.aggregations.hist.buckets,e.next=8,zt.postMessage("set_histogram",[s]);case 8:n=e.sent,a(Ct,n),e.next=15;break;case 12:throw e.prev=12,e.t0=e["catch"](1),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()}},It={},Pt={namespaced:!0,state:Tt,mutations:St,actions:At,getters:It};n["a"].use(l["a"]);var Rt=new l["a"].Store({modules:{App:Pt},strict:!1});_t()(Rt,{userPoolId:"eu-west-1_wsOo2av1M",identityPoolId:"eu-west-1:94d2360b-2ce5-4491-8ee8-785dd0682447",userPoolWebClientId:"m5n3heh5o042kjpe1cd96ha93",region:"eu-west-1"},"Cognito");var Ht=Rt,Mt=(a("d5e8"),a("5363"),a("9483"));Object(Mt["a"])("".concat("/connected-plant/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Lt=a("36de");Lt["a"].LOG_LEVEL="ERROR",xt["a"].configure({API:{endpoints:[{name:"prod",endpoint:"https://3ohe8pnzfb.execute-api.eu-west-1.amazonaws.com/prod",region:"eu-west-1",custom_header:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w["default"].currentSession();case 2:return t.t0=t.sent.idToken.jwtToken,t.next=5,w["default"].currentCredentials();case 5:return t.t1=t.sent._identityId,t.t2="3puriPZzDf9Mo664Oyuow1GO1B7TzX9J7oqxXISx",t.abrupt("return",{Authorization:t.t0,identityId:t.t1,"x-api-key":t.t2});case 8:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]}}),w["default"].configure({Auth:{identityPoolId:"eu-west-1:94d2360b-2ce5-4491-8ee8-785dd0682447",region:"eu-west-1",userPoolId:"eu-west-1_wsOo2av1M",userPoolWebClientId:"m5n3heh5o042kjpe1cd96ha93"}});var Nt=a("f309");n["a"].use(Nt["a"]);var qt=new Nt["a"]({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},Et=[],Gt={name:"App"},Vt=Gt,$t=(a("b8371"),a("7496")),Wt=Object(S["a"])(Vt,Dt,Et,!1,null,"02c443d1",null),Jt=Wt.exports;it()(Wt,{VApp:$t["a"]}),n["a"].config.productionTip=!1,new n["a"]({router:vt,store:Ht,vuetify:qt,render:function(t){return t(Jt)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},a8d7:function(t,e,a){"use strict";a("b106")},b106:function(t,e,a){},b8371:function(t,e,a){"use strict";a("ca4a")},ca4a:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.b02fd53f.png"},dd92:function(t,e,a){"use strict";a("5303")}});
//# sourceMappingURL=app.94ecae84.js.map