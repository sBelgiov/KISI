(this["webpackJsonpdatta-able-free-react-admin-template"]=this["webpackJsonpdatta-able-free-react-admin-template"]||[]).push([[17],{649:function(e,t,a){"use strict";var i=a(0),s=a.n(i).a.createContext(null);s.displayName="CardContext",t.a=s},650:function(e,t,a){"use strict";var i=a(3),s=a(0),m=a.n(s),o=a(22),n=a.n(o);t.a=function(e){return m.a.forwardRef((function(t,a){return m.a.createElement("div",Object(i.a)({},t,{ref:a,className:n()(t.className,e)}))}))}},660:function(e,t,a){"use strict";var i=a(3),s=a(7),m=a(22),o=a.n(m),n=a(0),r=a.n(n),c=a(24),l=a(56),d=a(650),p=a(649),g=["bsPrefix","className","variant","as"],u=r.a.forwardRef((function(e,t){var a=e.bsPrefix,m=e.className,n=e.variant,l=e.as,d=void 0===l?"img":l,p=Object(s.a)(e,g),u=Object(c.a)(a,"card-img");return r.a.createElement(d,Object(i.a)({ref:t,className:o()(n?u+"-"+n:u,m)},p))}));u.displayName="CardImg",u.defaultProps={variant:null};var h=u,j=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(d.a)("h5"),b=Object(d.a)("h6"),f=Object(l.a)("card-body"),v=Object(l.a)("card-title",{Component:y}),O=Object(l.a)("card-subtitle",{Component:b}),x=Object(l.a)("card-link",{Component:"a"}),N=Object(l.a)("card-text",{Component:"p"}),w=Object(l.a)("card-header"),_=Object(l.a)("card-footer"),H=Object(l.a)("card-img-overlay"),k=r.a.forwardRef((function(e,t){var a=e.bsPrefix,m=e.className,l=e.bg,d=e.text,g=e.border,u=e.body,h=e.children,y=e.as,b=void 0===y?"div":y,v=Object(s.a)(e,j),O=Object(c.a)(a,"card"),x=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return r.a.createElement(p.a.Provider,{value:x},r.a.createElement(b,Object(i.a)({ref:t},v,{className:o()(m,O,l&&"bg-"+l,d&&"text-"+d,g&&"border-"+g)}),u?r.a.createElement(f,null,h):h))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=h,k.Title=v,k.Subtitle=O,k.Body=f,k.Link=x,k.Text=N,k.Header=w,k.Footer=_,k.ImgOverlay=H;t.a=k},666:function(e,t,a){"use strict";var i=a(3),s=a(7),m=a(22),o=a.n(m),n=a(0),r=a.n(n),c=a(24),l=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],p=r.a.forwardRef((function(e,t){var a=e.bsPrefix,m=e.className,n=e.as,p=void 0===n?"div":n,g=Object(s.a)(e,l),u=Object(c.a)(a,"col"),h=[],j=[];return d.forEach((function(e){var t,a,i,s=g[e];if(delete g[e],"object"===typeof s&&null!=s){var m=s.span;t=void 0===m||m,a=s.offset,i=s.order}else t=s;var o="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+u+o:""+u+o+"-"+t),null!=i&&j.push("order"+o+"-"+i),null!=a&&j.push("offset"+o+"-"+a)})),h.length||h.push(u),r.a.createElement(p,Object(i.a)({},g,{ref:t,className:o.a.apply(void 0,[m].concat(h,j))}))}));p.displayName="Col",t.a=p},668:function(e,t,a){"use strict";var i=a(3),s=a(7),m=a(22),o=a.n(m),n=a(0),r=a.n(n),c=a(24),l=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],p=r.a.forwardRef((function(e,t){var a=e.bsPrefix,m=e.className,n=e.noGutters,p=e.as,g=void 0===p?"div":p,u=Object(s.a)(e,l),h=Object(c.a)(a,"row"),j=h+"-cols",y=[];return d.forEach((function(e){var t,a=u[e];delete u[e];var i="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&y.push(""+j+i+"-"+t)})),r.a.createElement(g,Object(i.a)({ref:t},u,{className:o.a.apply(void 0,[m,h,n&&"no-gutters"].concat(y))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},963:function(e,t,a){"use strict";a.r(t);var i=a(9),s=a(0),m=a.n(s),o=a(668),n=a(666),r=a(660),c=a(643),l=a(12),d=a(80),p=a.n(d),g=a(27),u=[{id:1,photo:"avatar-1.jpg",name:"Josephin Doe",new:3,status:1,time:"typing"},{id:2,photo:"avatar-2.jpg",name:"Lary Doe",new:1,status:1,time:"online"},{id:3,photo:"avatar-3.jpg",name:"Alice",status:1,time:"online"},{id:4,photo:"avatar-1.jpg",name:"Alia",status:0,new:1,time:"10 min ago"},{id:5,photo:"avatar-4.jpg",name:"Suzen",status:0,time:"15 min ago"},{id:6,photo:"avatar-1.jpg",name:"Josephin Doe",new:3,status:1,time:"typing"},{id:7,photo:"avatar-2.jpg",name:"Lary Doe",new:1,status:1,time:"online"},{id:8,photo:"avatar-3.jpg",name:"Alice",status:1,time:"online"},{id:9,photo:"avatar-1.jpg",name:"Alia",status:0,new:1,time:"10 min ago"},{id:10,photo:"avatar-4.jpg",name:"Suzen",status:0,time:"15 min ago"},{id:11,photo:"avatar-1.jpg",name:"Josephin Doe",new:3,status:1,time:"typing"},{id:12,photo:"avatar-2.jpg",name:"Lary Doe",new:1,status:1,time:"online"},{id:13,photo:"avatar-3.jpg",name:"Alice",status:1,time:"online"},{id:14,photo:"avatar-1.jpg",name:"Alia",status:0,new:1,time:"10 min ago"},{id:15,photo:"avatar-4.jpg",name:"Suzen",status:0,time:"15 min ago"},{id:16,photo:"avatar-1.jpg",name:"Josephin Doe",new:3,status:1,time:"typing"},{id:17,photo:"avatar-2.jpg",name:"Lary Doe",new:1,status:1,time:"online"},{id:18,photo:"avatar-3.jpg",name:"Alice",status:1,time:"online"},{id:19,photo:"avatar-1.jpg",name:"Alia",status:0,new:1,time:"10 min ago"},{id:20,photo:"avatar-4.jpg",name:"Suzen",status:0,time:"15 min ago"},{id:21,photo:"avatar-1.jpg",name:"Josephin Doe",new:3,status:1,time:"typing"},{id:22,photo:"avatar-2.jpg",name:"Lary Doe",new:1,status:1,time:"online"},{id:23,photo:"avatar-3.jpg",name:"Alice",status:1,time:"online"},{id:24,photo:"avatar-1.jpg",name:"Alia",status:0,new:1,time:"10 min ago"},{id:25,photo:"avatar-4.jpg",name:"Suzen",status:0,time:"15 min ago"}],h=a(646),j=a(1),y=a(232),b=function(e){var t=e.data,a=e.activeId,s=e.clicked,o=y("./".concat(t.photo)),n=["d-block"];n=t.status?[].concat(Object(i.a)(n),["text-c-green"]):[].concat(Object(i.a)(n),["text-muted"]);var r="";t.time&&(r=Object(j.jsx)("small",{className:n.join(" "),children:t.time}));var c="";return t.new&&(c=Object(j.jsx)("div",{className:"live-status",children:t.new})),Object(j.jsx)(m.a.Fragment,{children:Object(j.jsxs)(h.a,{className:a===t.id?"userlist-box active":"userlist-box",onClick:s,children:[Object(j.jsxs)(l.b,{to:"#",className:"media-left",children:[" ",Object(j.jsx)("img",{className:"media-object img-radius",src:o.default,alt:t.name}),c]}),Object(j.jsx)(h.a.Body,{children:Object(j.jsxs)("h6",{className:"chat-header",children:[t.name,r]})})]})})},f=a(647),v=a(325),O=[{friend_id:1,friend_photo:"avatar-1.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]},{friend_id:2,friend_photo:"avatar-2.jpg",messages:[{type:1,msg:"Hiii!!! Good Morning",time:"6:48 a.m"},{type:0,msg:"Hello, Very Good Morning",time:"6:50 a.m"},{type:0,msg:"How are You?",time:"8:50 a.m"},{type:1,msg:"Fine, What do you do?",time:"8:51 a.m"}]},{friend_id:4,friend_photo:"avatar-1.jpg",messages:[{type:1,msg:"Hiii!!! Good Morning",time:"6:48 a.m"},{type:0,msg:"Hello, Very Good Morning",time:"6:50 a.m"},{type:0,msg:"How are You?",time:"8:50 a.m"},{type:1,msg:"Fine, What do you do?",time:"8:51 a.m"}]},{friend_id:5,friend_photo:"avatar-4.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]},{friend_id:6,friend_photo:"avatar-1.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"},{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"},{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"},{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"},{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]},{friend_id:7,friend_photo:"avatar-2.jpg",messages:[{type:1,msg:"Hiii!!! Good Morning",time:"6:48 a.m"},{type:0,msg:"Hello, Very Good Morning",time:"6:50 a.m"},{type:0,msg:"How are You?",time:"8:50 a.m"},{type:1,msg:"Fine, What do you do?",time:"8:51 a.m"}]},{friend_id:8,friend_photo:"avatar-3.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]},{friend_id:9,friend_photo:"avatar-1.jpg",messages:[{type:1,msg:"Hiii!!! Good Morning",time:"6:48 a.m"},{type:0,msg:"Hello, Very Good Morning",time:"6:50 a.m"},{type:0,msg:"How are You?",time:"8:50 a.m"},{type:1,msg:"Fine, What do you do?",time:"8:51 a.m"}]},{friend_id:10,friend_photo:"avatar-4.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]},{friend_id:11,friend_photo:"avatar-1.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]},{friend_id:12,friend_photo:"avatar-2.jpg",messages:[{type:1,msg:"Hiii!!! Good Morning",time:"6:48 a.m"},{type:0,msg:"Hello, Very Good Morning",time:"6:50 a.m"},{type:0,msg:"How are You?",time:"8:50 a.m"},{type:1,msg:"Fine, What do you do?",time:"8:51 a.m"}]},{friend_id:13,friend_photo:"avatar-3.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]},{friend_id:14,friend_photo:"avatar-1.jpg",messages:[{type:1,msg:"Hiii!!! Good Morning",time:"6:48 a.m"},{type:0,msg:"Hello, Very Good Morning",time:"6:50 a.m"},{type:0,msg:"How are You?",time:"8:50 a.m"},{type:1,msg:"Fine, What do you do?",time:"8:51 a.m"}]},{friend_id:15,friend_photo:"avatar-4.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]},{friend_id:16,friend_photo:"avatar-1.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]},{friend_id:17,friend_photo:"avatar-2.jpg",messages:[{type:1,msg:"Hiii!!! Good Morning",time:"6:48 a.m"},{type:0,msg:"Hello, Very Good Morning",time:"6:50 a.m"},{type:0,msg:"How are You?",time:"8:50 a.m"},{type:1,msg:"Fine, What do you do?",time:"8:51 a.m"}]},{friend_id:18,friend_photo:"avatar-3.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]},{friend_id:19,friend_photo:"avatar-1.jpg",messages:[{type:1,msg:"Hiii!!! Good Morning",time:"6:48 a.m"},{type:0,msg:"Hello, Very Good Morning",time:"6:50 a.m"},{type:0,msg:"How are You?",time:"8:50 a.m"},{type:1,msg:"Fine, What do you do?",time:"8:51 a.m"}]},{friend_id:20,friend_photo:"avatar-2.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]},{friend_id:21,friend_photo:"avatar-3.jpg",messages:[{type:1,msg:"I'm just looking around. Will you tell me something about yourself?",time:"8:20 a.m"},{type:0,msg:"Ohh! very nice",time:"8:22 a.m"},{type:1,msg:"can you come with me?",time:"8:22 a.m"}]}],x=a(232),N=function(e){var t=e.message,a=e.photo,s=e.name,o="";t.type&&(o=Object(j.jsx)(l.b,{to:"#",className:"media-left photo-table",children:Object(j.jsx)("img",{className:"media-object img-radius img-radius m-t-5",src:x("./".concat(a)).default,alt:s})}));var n=[];return n=t.type?[].concat(Object(i.a)(n),["chat-menu-content"]):[].concat(Object(i.a)(n),["chat-menu-reply text-muted"]),Object(j.jsx)(m.a.Fragment,{children:Object(j.jsxs)(h.a,{className:"media chat-messages",children:[o,Object(j.jsxs)(h.a.Body,{className:n.join(" "),children:[Object(j.jsx)("div",{className:"",children:Object(j.jsx)("p",{className:"chat-cont",children:t.msg})}),Object(j.jsx)("p",{className:"chat-time",children:t.time})]})]})})},w=function(e){var t=e.user,a=e.chatOpen,s=e.listOpen,o=e.closed,n=["header-chat"];a&&s&&(n=[].concat(Object(i.a)(n),["open"]));var r=Object(j.jsx)(h.a,{className:"chat-messages text-center",children:Object(j.jsx)(h.a.Body,{className:"chat-menu-content",children:Object(j.jsx)("div",{className:"",children:Object(j.jsx)("p",{className:"chat-cont",children:"CHAT NOT FOUND"})})})});return O.filter((function(e){return e.friend_id===t.id&&(r=e.messages.map((function(a,i){return Object(j.jsx)(N,{message:a,name:t.name,photo:e.friend_photo},i)}))),!1})),Object(j.jsx)(m.a.Fragment,{children:Object(j.jsxs)("div",{className:n.join(" "),children:[Object(j.jsxs)("div",{className:"h-list-header",children:[Object(j.jsx)("h6",{children:t.name}),Object(j.jsx)(l.b,{to:"#",className:"h-back-user-list",onClick:o,children:Object(j.jsx)("i",{className:"feather icon-chevron-left text-muted"})})]}),Object(j.jsx)("div",{className:"h-list-body",children:Object(j.jsx)("div",{className:"main-chat-cont",children:Object(j.jsx)(p.a,{children:Object(j.jsx)("div",{className:"main-friend-chat",children:r})})})}),Object(j.jsx)("div",{className:"h-list-footer",children:Object(j.jsxs)(f.a,{children:[Object(j.jsx)(f.a.Prepend,{children:Object(j.jsx)(v.a,{variant:"success",className:"btn-attach",children:Object(j.jsx)("i",{className:"feather icon-paperclip"})})}),Object(j.jsx)(c.a,{type:"text",name:"h-chat-text",className:"h-send-chat",placeholder:"Write hear . . "}),Object(j.jsx)(v.a,{type:"submit",className:"input-group-append btn-send",children:Object(j.jsx)("i",{className:"feather icon-message-circle"})})]})})]})})},_=function(e){var t=e.listOpen,a=Object(s.useState)(t),i=Object(g.a)(a,2),o=i[0],n=i[1],r=Object(s.useState)([]),c=Object(g.a)(r,2),l=c[0],d=c[1];Object(s.useEffect)((function(){n(!1)}),[t]);var p=u.map((function(e){return Object(j.jsx)(b,{data:e,activeId:l.id,clicked:function(){n(!0),d(e)}},e.id)}));return Object(j.jsxs)(m.a.Fragment,{children:[p,Object(j.jsx)(w,{user:l,chatOpen:o,listOpen:t,closed:function(){n(!1),d([])}})]})};t.default=function(e){var t=e.listOpen,a=void 0===t||t,s=e.closed,d=["header-user-list"];return a&&(d=[].concat(Object(i.a)(d),["open"])),Object(j.jsx)(m.a.Fragment,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(n.a,{children:Object(j.jsxs)(r.a,{className:"Recent-Users",children:[Object(j.jsx)(r.a.Header,{children:Object(j.jsx)(r.a.Title,{as:"h5",children:"Dottori"})}),Object(j.jsx)(r.a.Body,{className:"px-0 py-2",children:Object(j.jsxs)("div",{style:{padding:"30px"},children:[Object(j.jsx)("div",{className:"h-list-header",children:Object(j.jsx)("div",{className:"input-group",children:Object(j.jsx)(c.a,{type:"text",id:"search-friends",placeholder:"Cerca Dottori . . ."})})}),Object(j.jsxs)("div",{className:"h-list-body",children:[Object(j.jsx)(l.b,{to:"#",className:"h-close-text",onClick:s,children:Object(j.jsx)("i",{className:"feather icon-chevrons-right"})}),Object(j.jsx)("div",{className:"main-friend-cont scroll-div",children:Object(j.jsx)("div",{className:"main-friend-list",style:{height:"calc(100vh - 85px)"},children:Object(j.jsx)(p.a,{children:Object(j.jsx)(_,{listOpen:a})})})})]})]})})]})})})})}}}]);
//# sourceMappingURL=17.d2b92419.chunk.js.map