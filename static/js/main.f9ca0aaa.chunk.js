(this.webpackJsonpemployee_dir=this.webpackJsonpemployee_dir||[]).push([[0],{30:function(e,t,a){e.exports=a(63)},36:function(e,t,a){},37:function(e,t,a){},55:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),l=a.n(o),c=(a(35),a(36),a(26)),i=a(1),s=(a(37),a(23)),d=a(24),m=a(29),u=a(28),p=a(25),f=a.n(p);a(55);var b=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("table",{className:"shadow"},r.a.createElement("tr",null,r.a.createElement("th",null,"Photo"),r.a.createElement("th",null,"First"),r.a.createElement("th",null,"Last"),r.a.createElement("th",null,"Gender"),r.a.createElement("th",null,"Phone Number")),e.data.map((function(e){return r.a.createElement("tr",{key:e.cell},r.a.createElement("td",null,r.a.createElement("img",{alt:"profile",src:e.picture.large})),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.gender),r.a.createElement("td",null,"#",e.phone),r.a.createElement("td",null,e.dob.age))})))))))};var h=function(e){return r.a.createElement("div",{className:"jumbotron bg-primary shadow"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col mb-4 ml-4"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle shadow",type:"button",id:"dropdownMenu3","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Filter By"),r.a.createElement("div",{className:"dropdown-menu shadow","aria-labelledby":"dropdownMenu3"},r.a.createElement("button",{className:"dropdown-item",type:"button",onClick:function(){e.filterMen()}},"Filter Men"),r.a.createElement("button",{className:"dropdown-item",type:"button",onClick:function(){e.filterWomen()}},"Filter Women"))),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle shadow",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort By"),r.a.createElement("div",{className:"dropdown-menu shadow","aria-labelledby":"dropdownMenu2"},r.a.createElement("button",{className:"dropdown-item",type:"button",onClick:function(){e.filterDobAsc()}},"DOB Ascending"),r.a.createElement("button",{className:"dropdown-item",type:"button",onClick:function(){e.filterDobDsc()}},"DOB Descending"))))))},E=(a(56),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:[],originalData:[]},e.filterMen=function(){var t=e.state.originalData.filter((function(e){return"male"===e.gender}));console.log(t),e.setState({data:t})},e.filterWomen=function(){var t=e.state.originalData.filter((function(e){return"female"===e.gender}));e.setState({data:t})},e.filterDobAsc=function(){var t=e.state.originalData.sort((function(e,t){return parseInt(e.dob.age)-parseInt(t.dob.age)}));e.setState({data:t})},e.filterDobDsc=function(){var t=e.state.originalData.sort((function(e,t){return parseInt(t.dob.age)-parseInt(e.dob.age)}));e.setState({data:t})},e.refreshBtn=function(){window.location.reload()},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;f()("https://randomuser.me/api/?results=12").then((function(t){console.log("Success Component Did Mount: "+t.data.results),e.setState({data:t.data.results,originalData:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{filterMen:this.filterMen,filterWomen:this.filterWomen,filterDobAsc:this.filterDobAsc,filterDobDsc:this.filterDobDsc,refreshBtn:this.refreshBtn}),r.a.createElement(b,{data:this.state.data}))}}]),a}(r.a.Component));var w=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(i.a,{exact:!0,path:"/",component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.f9ca0aaa.chunk.js.map