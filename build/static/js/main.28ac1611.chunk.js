(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},37:function(e,t,a){},38:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(28),c=a.n(r),o=(a(37),a(1)),l=a(2),i=a(5),u=a(4),h=a(6),m=(a(38),a(12)),d=a(11),g=a.n(d),b="".concat("http://localhost:8082","/instructors/").concat("in28minutes"),p=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"retrieveAllCourses",value:function(e){return console.log("executed service"+e),g.a.get("".concat(b,"/userdetails"))}},{key:"retrieveAllUser",value:function(){console.log("inside refresh courses  2 "+window.sessionStorage.getItem("username"));var e=window.sessionStorage.getItem("username");console.log("executed service");var t=g.a.get("http://localhost:8082/userDetails/"+e),a=g.a.get("http://localhost:8082/api/image/"+e);return Promise.all([t,a])}}]),e}()),f=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(i.a)(this,Object(u.a)(t).call(this,e)),console.log(e),a.state={courses:[],message:null,pic:[]},a.refreshCourses=a.refreshCourses.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refreshCourses()}},{key:"refreshCourses",value:function(){var e=this;console.log("inside refresh courses "+sessionStorage.getItem("USER_NAME_SESSION_ATTRIBUTE_NAME")),console.log("inside refresh courses  2 "+window.sessionStorage.getItem("username")),p.retrieveAllUser("in28minutes").then(function(t){console.log("response is "+t[0].data),e.setState({courses:t[0].data}),console.log("response 2 is "+t[1].data),e.setState({pic:t[1].data})})}},{key:"render",value:function(){return console.log("render"),s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"Please find your details"),s.a.createElement("div",{className:"container"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"First Name"),s.a.createElement("th",null,"Email"),s.a.createElement("th",null,"Profession"),s.a.createElement("th",null,"Profile Pic"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,this.state.courses.username),s.a.createElement("td",null,this.state.courses.email),s.a.createElement("td",null,this.state.courses.profession),s.a.createElement("td",null,s.a.createElement("img",{src:this.state.pic,style:{width:150,height:250},className:"tc br3"})))))))}}]),t}(n.Component),v=a(14),E=a(13),O=a(29),j=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"executeBasicAuthenticationService",value:function(e,t){return console.log("username "+e),console.log("password "+t),g.a.get("".concat("http://localhost:8082","/basicauth"),{headers:{authorization:this.createBasicAuthToken(e,t)}})}},{key:"executeUserService",value:function(e,t){return g.a.get("".concat("http://localhost:8082","/userDetails"),{headers:{authorization:this.createBasicAuthToken(e,t)}})}},{key:"createBasicAuthToken",value:function(e,t){return"Basic "+window.btoa(e+":"+t)}},{key:"registerSuccessfulLogin",value:function(e,t){sessionStorage.setItem("authenticatedUser",e),window.sessionStorage.setItem("username",e),this.setupAxiosInterceptors(this.createBasicAuthToken(e,t))}},{key:"logout",value:function(){sessionStorage.removeItem("authenticatedUser")}},{key:"isUserLoggedIn",value:function(){return null!==sessionStorage.getItem("authenticatedUser")}},{key:"getLoggedInUserName",value:function(){var e=sessionStorage.getItem("authenticatedUser");return null===e?"":e}},{key:"setupAxiosInterceptors",value:function(e){var t=this;g.a.interceptors.request.use(function(a){return t.isUserLoggedIn()&&(a.headers.authorization=e),a})}}]),e}()),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:"",hasLoginFailed:!1,showSuccessMessage:!1,user:[]},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.loginClicked=a.loginClicked.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"loginClicked",value:function(){var e=this;j.executeBasicAuthenticationService(this.state.username,this.state.password).then(function(){j.registerSuccessfulLogin(e.state.username,e.state.password),j.executeUserService(e.state.username,e.state.password).then(function(t){e.setState({user:t.data})}),console.log(e.state.user),e.props.history.push("/userdetails")}).catch(function(){e.setState({showSuccessMessage:!1}),e.setState({hasLoginFailed:!0})})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Login"),s.a.createElement("div",{className:"container"},this.state.hasLoginFailed&&s.a.createElement("div",{className:"alert alert-warning"},"Invalid Credentials"),this.state.showSuccessMessage&&s.a.createElement("div",null,"Login Sucessful"),s.a.createElement("tr",null,"User Name : ",s.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),s.a.createElement("br",null),s.a.createElement("tr",null,"Password :   ",s.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),s.a.createElement("br",null),s.a.createElement("tr",null,s.a.createElement("button",{className:"btn btn-success",onClick:this.loginClicked},"Login"))))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"You are logged out"),s.a.createElement("div",{className:"container"},"Thank You for Using Our Application."))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=j.isUserLoggedIn();return s.a.createElement("header",null,s.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},s.a.createElement("ul",{className:"navbar-nav navbar-collapse justify-content-end"},!e&&s.a.createElement("li",null,s.a.createElement(v.b,{className:"nav-link",to:"/login"},"Login")),e&&s.a.createElement("li",null,s.a.createElement(v.b,{className:"nav-link",to:"/logout",onClick:j.logout},"Logout")))))}}]),t}(n.Component),S=Object(E.f)(y),C=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return j.isUserLoggedIn()?s.a.createElement(E.b,this.props):s.a.createElement(E.a,{to:"/login"})}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(S,null),s.a.createElement(E.d,null,s.a.createElement(E.b,{path:"/",exact:!0,component:k}),s.a.createElement(E.b,{path:"/login",exact:!0,component:k}),s.a.createElement(C,{path:"/logout",exact:!0,component:w}),s.a.createElement(C,{path:"/userdetails",exact:!0,component:f})))))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(I,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.28ac1611.chunk.js.map