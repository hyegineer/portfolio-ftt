(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238067"],{fe2d:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"layer",staticStyle:{position:"fixed",top:"0",left:"0",right:"0",bottom:"0",overflow:"hidden","z-index":"1","-webkit-overflow-scrolling":"touch"},attrs:{id:"layer"}})},d=[],i={name:"UtilPostcode",data:function(){return{}},mounted:function(){var e=this;try{window.daum.postcode.load((function(){new window.daum.Postcode({oncomplete:function(t){e.viewClose({name:"postcode",payload:{postcode:t.zonecode,address:t.address}})},width:"100%",height:"100%"}).embed(document.getElementById("layer"))}))}catch(t){this.alert(t)}}},a=i,c=o("2877"),l=Object(c["a"])(a,n,d,!1,null,null,null);t["default"]=l.exports}}]);