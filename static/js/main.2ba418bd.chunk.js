(this.webpackJsonptodo2=this.webpackJsonptodo2||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),i=n.n(r),o=n(6),s=n(5),j=n(4),d=n(0);var u=function(e){var t=e.todo,n=e.toggleTask,c=e.removeTask;return Object(d.jsxs)("div",{className:"item-todo",children:[Object(d.jsx)("div",{className:t.complete?"item-text strike":"item-text",onClick:function(){return n(t.id)},children:t.task}),Object(d.jsx)("div",{className:"item-delete",onClick:function(){return c(t.id)},children:Object(d.jsx)("i",{className:"far fa-times-circle"})})]},t.id)};var l=function(e){var t=e.addTask,n=Object(c.useState)(""),a=Object(j.a)(n,2),r=a[0],i=a[1],o=function(e){e.preventDefault(),t(r),i("")};return Object(d.jsxs)("form",{onSubmit:o,children:[Object(d.jsx)("input",{value:r,onChange:function(e){i(e.currentTarget.value)},onKeyDown:function(e){"Enter"===e.key&&o(e)},placeholder:"\u042f\u043a\u0430 \u0437\u0430\u0434\u0430\u0447\u0430?"}),Object(d.jsx)("button",{children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"})]})};n(14);var b=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=function(e){a(Object(s.a)(n.filter((function(t){return t.id!==e}))))},i=function(e){a(Object(s.a)(n.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{complete:!t.complete}):Object(o.a)({},t)}))))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsxs)("h2",{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0441\u043f\u0440\u0430\u0432: ",n.length]})}),Object(d.jsx)(l,{addTask:function(e){if(e){var t={id:Math.random().toString(36).substr(2,9),task:e,complete:!1};a([t].concat(Object(s.a)(n)))}}}),n.map((function(e){return Object(d.jsx)(u,{todo:e,toggleTask:i,removeTask:r},e.id)}))]})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2ba418bd.chunk.js.map