(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[5],{648:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,l=void 0;try{for(var m,o=e[Symbol.iterator]();!(r=(m=o.next()).done)&&(a.push(m.value),!t||a.length!==t);r=!0);}catch(c){n=!0,l=c}finally{try{r||null==o.return||o.return()}finally{if(n)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return n}))},669:function(e,t,a){"use strict";a.r(t);var r=a(648),n=a(646),l=a(647),m=a(1),o=a.n(m),c=a(166),u=a(87),s=a(86),i=new u.a,f=new u.a,d=a(19);t.default=Object(c.b)((function(e){return{usersData:e.users.usersData}}),{onEdit:function(e,t){return function(a){i.edit(e,t),a(s.d)}},onDelete:function(e){return function(t){f.delete(e),t(s.d)}},refreshUsers:s.d})((function(e){var t=e.usersData,a=e.match,c=e.onEdit,u=e.onDelete,s=e.refreshUsers,i=a.params.id,f=t.find((function(e){return e.id.toString()===i})),h=Object(m.useState)(f.firstName),E=Object(r.a)(h,2),p=E[0],b=E[1],v=Object(m.useState)(f.lastName),y=Object(r.a)(v,2),x=y[0],g=y[1],w=Object(m.useState)(f.email),j=Object(r.a)(w,2),O=j[0],k=j[1],C=Object(m.useState)(f.username),F=Object(r.a)(C,2),S=F[0],A=F[1],D=Object(m.useState)(f.password),N=Object(r.a)(D,2),U=N[0],z=N[1],I=Object(d.g)();return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.f,null,o.a.createElement(l.j,null,"Edit user"),o.a.createElement(l.g,null,o.a.createElement(l.u,{className:"form-horizontal"},o.a.createElement(l.v,{row:!0},o.a.createElement(l.k,{md:"3"},o.a.createElement(l.F,{htmlFor:"hf-text-first-name"},"First name")),o.a.createElement(l.k,{xs:"12",md:"9"},o.a.createElement(l.A,{onChange:function(e){return b(e.target.value)},value:p,type:"text",id:"hf-text-first-name",name:"hf-text-first-name",placeholder:"Enter first name...",autoComplete:"text"}))),o.a.createElement(l.v,{row:!0},o.a.createElement(l.k,{md:"3"},o.a.createElement(l.F,{htmlFor:"hf-text-last-name"},"Last name")),o.a.createElement(l.k,{xs:"12",md:"9"},o.a.createElement(l.A,{onChange:function(e){return g(e.target.value)},value:x,type:"text",id:"hf-text-last-name",name:"hf-text-last-name",placeholder:"Enter last name...",autoComplete:"text"}))),o.a.createElement(l.v,{row:!0},o.a.createElement(l.k,{md:"3"},o.a.createElement(l.F,{htmlFor:"hf-email"},"e-mail")),o.a.createElement(l.k,{xs:"12",md:"9"},o.a.createElement(l.A,{onChange:function(e){return k(e.target.value)},value:O,type:"email",id:"hf-email",name:"hf-email",placeholder:"Enter Email...",autoComplete:"email"}))),o.a.createElement(l.v,{row:!0},o.a.createElement(l.k,{md:"3"},o.a.createElement(l.F,{htmlFor:"hf-text-username"},"Username")),o.a.createElement(l.k,{xs:"12",md:"9"},o.a.createElement(l.A,{onChange:function(e){return A(e.target.value)},value:S,type:"text",id:"hf-text-username",name:"hf-text-username",placeholder:"Enter username...",autoComplete:"text"}))),o.a.createElement(l.v,{row:!0},o.a.createElement(l.k,{md:"3"},o.a.createElement(l.F,{htmlFor:"hf-text-password"},"Password")),o.a.createElement(l.k,{xs:"12",md:"9"},o.a.createElement(l.A,{onChange:function(e){return z(e.target.value)},value:U,type:"password",id:"hf-text-password",name:"hf-text-password",placeholder:"Enter password...",autoComplete:"text"}))))),o.a.createElement(l.h,null,o.a.createElement(l.e,{onClick:function(){c(i,{firstName:p,lastName:x,email:O,username:S,password:"1234"}),s(),I.push("/users")},type:"submit",size:"sm",color:"primary"},o.a.createElement(n.a,{name:"cil-scrubber"})," Edit"),"\xa0",o.a.createElement(l.e,{onClick:function(){u(i),s(),I.push("/users")},type:"reset",size:"sm",color:"danger"},o.a.createElement(n.a,{name:"cil-ban"})," Delete"))))}))}}]);
//# sourceMappingURL=5.afb99e48.chunk.js.map