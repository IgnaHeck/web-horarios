(this["webpackJsonpweb-horarios"]=this["webpackJsonpweb-horarios"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(6),a=n.n(r),i=(n(12),n(13),n(14),n(7)),l=n(4),s=function(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(""),a=Object(l.a)(r,2),s=a[0],u=a[1];console.log(window.localStorage.getItem("elementos"));var j=Object(o.useState)((function(){return JSON.parse(window.localStorage.getItem("elementos"))||[]})),d=Object(l.a)(j,2),b=d[0],h=d[1];return{changeText:function(e){c(e),console.log("Texto:",n)},changeHora:function(e){u(e),console.log("Hora:",s)},addElement:function(e,t){var n=new Date,o={};o.id=n.getTime().toString(),o.text=t,o.hora=e,console.log("Elementos:",b),console.log(o),h([].concat(Object(i.a)(b),[o])),console.log("Elementos post setElements:",b)},delElement:function(e){h(b.filter((function(t){return e!==t.id})))},persistirElemento:function(){window.localStorage.setItem("elementos",JSON.stringify(b))},elements:b,texto:n,hora:s}},u=(n(15),n(0)),j=function(e){var t=e.className,n=e.children;return Object(u.jsx)("ul",{className:t,children:n})},d=(n(17),function(e){var t=e.text,n=e.value,o=e.render;return Object(u.jsxs)("li",{children:[o,Object(u.jsxs)("p",{children:["Materia: ",t," "]})," ",Object(u.jsxs)("p",{children:[" Horario: ",n]})]})}),b=(n(18),function(e){var t=e.handleDelete,n=e.id;return Object(u.jsx)("p",{className:"noselect",id:"remove-button",onClick:function(e){return function(e){e.preventDefault(),t(n)}(e)},children:"\u274c"})}),h=function(){var e=s(),t=e.changeText,n=e.changeHora,o=e.addElement,c=e.delElement,r=e.persistirElemento,a=e.elements,i=e.hora,l=e.texto;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(e){r()},children:"Guardar"}),Object(u.jsxs)("form",{onSubmit:function(e){o(i,l),console.log("addElement:",i,l),e.preventDefault()},children:[Object(u.jsxs)("label",{children:["Materia:",Object(u.jsx)("input",{onChange:function(e){t(e.target.value)},type:"text",value:l})]}),Object(u.jsxs)("label",{children:["Horario:",Object(u.jsx)("input",{onChange:function(e){n(e.target.value)},type:"text",value:i})]}),Object(u.jsx)("button",{type:"submit",value:"Submit",children:"Submit"})]}),Object(u.jsxs)(j,{className:"lista",children:[" ",a.map((function(e,t){return Object(u.jsx)(d,{text:e.text,value:e.hora,render:Object(u.jsx)(b,{id:e.id,handleDelete:c})},e.id)}))]})]})};var f=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("h1",{children:"Materias, horarios y Recursos"})}),Object(u.jsx)(h,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),m()}],[[19,1,2]]]);
//# sourceMappingURL=main.885a6da1.chunk.js.map