(this.webpackJsonppacientes=this.webpackJsonppacientes||[]).push([[0],{10:function(e,a,t){e.exports=t(23)},15:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),o=t.n(r),c=(t(15),t(9)),i=t(2),s=t(4),m=t(7),u=t(8),p=t.n(u);var h=function(e){var a=e.crearCita,t=Object(n.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""}),r=Object(i.a)(t,2),o=r[0],c=r[1],u=function(e){c(Object(m.a)({},o,Object(s.a)({},e.target.name,e.target.value)))},h=Object(n.useState)(!1),d=Object(i.a)(h,2),E=d[0],f=d[1],g=o.mascota,b=o.propietario,v=o.fecha,N=o.hora,w=o.sintomas;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Crear cita"),E?l.a.createElement("p",{className:"alerta-error"},"Todos los campos son obligatorios"):null,l.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""===g.trim()||""===b||""===v||""===N||""===w)return console.log("Hay un error, tienes que agregar todos los ddatos"),void f(!0);f(!1),o.id=p()(),console.log(o),a(o),c({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""})}},l.a.createElement("label",null,"Nombre mascota"),l.a.createElement("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"nombre de la mascota",onChange:u,value:g}),l.a.createElement("label",null,"Nombre del Due\xf1o"),l.a.createElement("input",{type:"text",name:"propietario",className:"u-full-width",placeholder:"nombre del due\xf1o",onChange:u,value:b}),l.a.createElement("label",null,"Fecha de la cita"),l.a.createElement("input",{type:"date",name:"fecha",className:"u-full-width",onChange:u,value:v}),l.a.createElement("label",null,"Nombre del Due\xf1o"),l.a.createElement("input",{type:"time",name:"hora",className:"u-full-width",onChange:u,value:N}),l.a.createElement("label",null,"Sintomas"),l.a.createElement("textarea",{className:"u-full-width",name:"sintomas",onChange:u,value:w}),l.a.createElement("button",{type:"submit",className:"u-full-width button-primary"},"Agregar cita")))};var d=function(e){var a=e.cita,t=e.eliminarCita,n=a.id,r=a.mascota,o=a.propietario,c=a.fecha,i=a.hora,s=a.sintomas;return l.a.createElement("div",{className:"cita"},l.a.createElement("p",null,"Mascota:",l.a.createElement("span",null,r)),l.a.createElement("p",null,"Due\xf1o:",l.a.createElement("span",null,o)),l.a.createElement("p",null,"fecha:",l.a.createElement("span",null,c)),l.a.createElement("p",null,"hora:",l.a.createElement("span",null,i)),l.a.createElement("p",null,"sintomas:",l.a.createElement("span",null,s)),l.a.createElement("button",{className:"button eliminar u-full-width",onClick:function(){return t(n)}},"Eliminar \xd7"))};var E=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var a=Object(n.useState)(e),t=Object(i.a)(a,2),r=t[0],o=t[1];Object(n.useEffect)((function(){console.log("Se uso useEffect"),e?localStorage.setItem("citas",JSON.stringify(r)):localStorage.setItem("citas",JSON.stringify([]))}),[r,e]);var s=function(e){console.log("eliminar cita",e);var a=r.filter((function(a){return a.id!==e}));o(a)};console.log(r.length);var m=0===r.length?"No hay citas":"Administra tus citas";return(l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Administrador de pacientes"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"conatainer"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(h,{crearCita:function(e){console.log("creando cita"),o([].concat(Object(c.a)(r),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,m),r.map((function(e){return l.a.createElement(d,{cita:e,key:e.id,eliminarCita:s})}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.14a6f134.chunk.js.map