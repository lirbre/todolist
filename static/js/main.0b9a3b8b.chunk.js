(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{38:function(t,e,n){},58:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),c=n(17),a=n.n(c),r=(n(58),n(11)),s=n(9),d=(n(38),n(98)),l=n(99),u=n(3);var j=function(t){var e=Object(i.useState)(t.edit?t.edit.valueText:""),n=Object(s.a)(e,2),o=n[0],c=n[1],a=function(t){c(t.target.value)};return Object(u.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:o}),c("")},children:t.edit?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{id:"filled-basic",label:"Edit what you want to do",variant:"filled",className:"textfield",type:"text",name:"text",value:o,autoComplete:"off",required:!0,onChange:a}),Object(u.jsx)(l.a,{variant:"contained",type:"submit",children:"UPDATE IT!"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{id:"filled-basic",label:"What to do now?",variant:"filled",className:"textfield",type:"text",name:"text",value:o,autoComplete:"off",required:!0,onChange:a}),Object(u.jsx)(l.a,{variant:"contained",type:"submit",children:"ADD IT!"})]})})},m=n(43),b=n(44),x=function(t){var e=t.todos,n=t.completeTodo,o=t.removeTodo,c=t.updateTodo,a=Object(i.useState)({id:null,value:""}),r=Object(s.a)(a,2),d=r[0],l=r[1];return d.id?Object(u.jsx)(j,{edit:d,onSubmit:function(t){c(d.id,t),l({id:null,value:""})}}):e.map((function(t,e){return Object(u.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(u.jsx)("div",{className:"todo-text",onClick:function(){return n(t.id)},children:Object(u.jsx)("p",{children:t.text})},t.id),Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)(m.a,{onClick:function(){return o(t.id)},className:"delete-icon",size:"32px"}),Object(u.jsx)(b.a,{onClick:function(){return l({id:t.id,valueText:t.text,valueTime:t.time})},className:"edit-icon",size:"32px"})]})]},e)}))};var f=function(){var t=Object(i.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"main-cover",children:[Object(u.jsx)("p",{className:"intro-text",children:"TO DO LIST"}),Object(u.jsx)(j,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(r.a)(n));o(e)}}}),Object(u.jsx)(x,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));o(e)},removeTodo:function(t){var e=Object(r.a)(n).filter((function(e){return e.id!==t}));o(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&o((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})})};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.0b9a3b8b.chunk.js.map