(this["webpackJsonpdatta-able-free-react-admin-template"]=this["webpackJsonpdatta-able-free-react-admin-template"]||[]).push([[23],{661:function(e,t,l){"use strict";var r=l(0),a=l.n(r),n=l(971),s=l(1);t.a=function(e){return Object(s.jsx)(a.a.Fragment,{children:Object(s.jsxs)(n.a,{variant:"warning",children:[e.message,Object(s.jsx)(n.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}},939:function(e){e.exports=JSON.parse('[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]')},966:function(e,t,l){"use strict";l.r(t);var r=l(27),a=l(0),n=l.n(a),s=l(668),o=l(666),i=l(660),c=l(825),j=l.n(c),d=l(715),p=l(717),h=l(939),g=l(1),b=Object(p.compose)(Object(p.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(g.jsx)("div",{style:{height:"100%"}}),containerElement:Object(g.jsx)("div",{style:{height:"400px"}}),mapElement:Object(g.jsx)("div",{style:{height:"100%"}}),center:{lat:28.5274851,lng:77.1389452}}),Object(p.withStateHandlers)((function(){return{isOpen:!1}}),{onToggleOpen:function(e){var t=e.isOpen;return function(){return{isOpen:!t}}}}),d.withScriptjs,d.withGoogleMap)((function(e){return Object(g.jsxs)(d.GoogleMap,{defaultZoom:5,defaultCenter:e.center,defaultOptions:{styles:h},children:[Object(g.jsx)(j.a,{defaultPosition:new google.maps.LatLng(e.center.lat,e.center.lng),options:{closeBoxURL:"",enableEventPropagation:!0},children:Object(g.jsx)("div",{style:{backgroundColor:"yellow",opacity:.75,padding:"12px"},children:Object(g.jsx)("div",{style:{fontSize:"16px",fontColor:"#08233B"},children:"Hello, India!"})})}),Object(g.jsx)(d.Marker,{position:{lat:23.0204978,lng:72.4396583},onClick:e.onToggleOpen,children:e.isOpen&&Object(g.jsx)(j.a,{onCloseClick:e.onToggleOpen,options:{closeBoxURL:"",enableEventPropagation:!0},children:Object(g.jsx)("div",{style:{backgroundColor:"yellow",opacity:.75,padding:"12px"},children:Object(g.jsx)("div",{style:{fontSize:"16px",fontColor:"#08233B"},children:"Hello, Gujarat!"})})})})]})})),m=l(940).MarkerClusterer,y=Object(p.compose)(Object(p.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(g.jsx)("div",{style:{height:"100%"}}),containerElement:Object(g.jsx)("div",{style:{height:"400px"}}),mapElement:Object(g.jsx)("div",{style:{height:"100%"}})}),Object(p.withHandlers)({onMarkerClustererClick:function(){return function(e){var t=e.getMarkers();console.log("Current clicked markers length: ".concat(t.length)),console.log(t)}}}),d.withScriptjs,d.withGoogleMap)((function(e){return Object(g.jsx)(d.GoogleMap,{defaultZoom:3,defaultCenter:{lat:25.0391667,lng:121.525},children:Object(g.jsx)(m,{onClick:e.onMarkerClustererClick,averageCenter:!0,enableRetinaIcons:!0,gridSize:60,children:e.markers.map((function(e){return Object(g.jsx)(d.Marker,{position:{lat:e.latitude,lng:e.longitude}},e.photo_id)}))})})})),x=Object(p.compose)(d.withScriptjs,d.withGoogleMap)((function(e){return Object(g.jsx)(d.GoogleMap,{defaultZoom:8,defaultCenter:{lat:28.5274851,lng:77.1389452},children:Object(g.jsx)(d.Marker,{position:{lat:28.5274851,lng:77.1389452}})})})),f=l(717),u=f.compose,O=f.withProps,w=l(715),k=w.withScriptjs,v=w.withGoogleMap,T=w.GoogleMap,M=w.StreetViewPanorama,C=w.OverlayView,S=function(e,t){return{x:-e/2,y:-t/2}},E=u(O({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(g.jsx)("div",{style:{height:"100%"}}),containerElement:Object(g.jsx)("div",{style:{height:"400px"}}),mapElement:Object(g.jsx)("div",{style:{height:"100%"}}),center:{lat:49.2853171,lng:-123.1119202}}),k,v)((function(e){return Object(g.jsx)(T,{defaultZoom:8,defaultCenter:e.center,children:Object(g.jsx)(M,{defaultPosition:e.center,visible:!0,children:Object(g.jsx)(C,{position:{lat:49.28590291211115,lng:-123.11248166065218},mapPaneName:C.OVERLAY_LAYER,getPixelPositionOffset:S,children:Object(g.jsx)("div",{style:{background:"red",color:"white",padding:5,borderRadius:"50%"},children:"OverlayView"})})})})})),R=l(661),P=l(942),z=l.n(P);t.default=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),l=t[0],c=t[1];return Object(a.useEffect)((function(){var e=["https://gist.githubusercontent.com","/farrrr/dfda7dd7fccfec5474d3","/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json"].join("");return z()(e).then((function(e){return e.json()})).then((function(e){c(e.photos)})),function(){c([])}}),[]),Object(g.jsxs)(n.a.Fragment,{children:[Object(g.jsx)(s.a,{children:Object(g.jsx)(o.a,{sm:12,children:Object(g.jsx)(R.a,{message:"For more info please check the components's official documentation",link:"https://www.npmjs.com/package/react-google-maps"})})}),Object(g.jsxs)(s.a,{children:[Object(g.jsx)(o.a,{xl:6,children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(i.a.Header,{children:Object(g.jsx)(i.a.Title,{as:"h5",children:"Default Marker"})}),Object(g.jsx)(i.a.Body,{children:Object(g.jsx)(x,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAChufWiMfwsmyX3Se1dRaN4t31z0xmIMo&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(g.jsx)("div",{style:{height:"100%"}}),containerElement:Object(g.jsx)("div",{style:{height:"400px"}}),mapElement:Object(g.jsx)("div",{style:{height:"100%"}})})})]})}),Object(g.jsx)(o.a,{xl:6,children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(i.a.Header,{children:Object(g.jsx)(i.a.Title,{as:"h5",children:"Infobox"})}),Object(g.jsx)(i.a.Body,{children:Object(g.jsx)(b,{})})]})}),Object(g.jsx)(o.a,{xl:6,children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(i.a.Header,{children:Object(g.jsx)(i.a.Title,{as:"h5",children:"Marker Clusterer"})}),Object(g.jsx)(i.a.Body,{children:Object(g.jsx)(y,{markers:l})})]})}),Object(g.jsx)(o.a,{xl:6,children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(i.a.Header,{children:Object(g.jsx)(i.a.Title,{as:"h5",children:"Street View Panorma"})}),Object(g.jsx)(i.a.Body,{children:Object(g.jsx)(E,{})})]})})]})]})}}}]);
//# sourceMappingURL=23.ecfca5f5.chunk.js.map