(this["webpackJsonpvkd-kart"]=this["webpackJsonpvkd-kart"]||[]).push([[0],{43:function(e,t,n){e.exports=n(82)},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),i=n.n(c),l=(n(48),n(13)),o=n.n(l),s=n(11),u=n(20),p=n(2),m=n(3),b=n(5),d=n(4),h=n(6),f=(n(50),n(51),n(52),n(9)),g=(n(57),n(21)),O=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"".concat(this.props.size," menu-item"),onClick:function(){return e.props.history.push("".concat(e.props.match.url).concat(e.props.linkUrl))}},r.a.createElement("div",{className:"background-image",style:{background:"url(".concat(this.props.imageUrl,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"heading"},this.props.heading),r.a.createElement("span",{className:"sub-heading"},this.props.subheading)))}}]),t}(r.a.Component),v=Object(g.g)(O),j=n(7),y=Object(j.a)([function(e){return e.directory}],(function(e){return e.sections})),E=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},this.props.sections.map((function(e){var t=e.imageUrl,n=e.heading,a=e.subheading,c=e.id,i=e.size,l=e.linkUrl;return r.a.createElement(v,{key:c,heading:n,subheading:a,size:i,imageUrl:t,linkUrl:l})})))}}]),t}(r.a.Component),k=Object(j.b)({sections:y}),w=Object(f.b)(k)(E),N=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(w,null))}}]),t}(r.a.Component),C=Object(j.a)([function(e){return e.shop}],(function(e){return e.collections})),P=C,U=n(23),S=(n(59),n(60),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,c=Object(U.a)(e,["children","isGoogleSignIn","inverted"]);return console.log(a),r.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," ").concat(n?"google-signin":""," custom-button")},c),t)}),I="TOGGLE_CART_DISPLAY",x="ADD_ITEM",D="CLEAR_ITEM_FROM_CART",T="REMOVE_ITEM",B=function(){return{type:I}},A=function(e){return{type:x,payload:e}},R=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.AddItem,a=t.name,c=t.imageUrl,i=t.price;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"button",onClick:function(){return n(t)}},r.a.createElement(S,{inverted:!0},"ADD TO CART")),r.a.createElement("div",{className:"collection-item-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},"$"+i)))}}]),t}(r.a.Component),W=Object(f.b)(null,(function(e){return{AddItem:function(t){return e(A(t))}}}))(R),M=(n(61),function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h2",null,this.props.title),r.a.createElement("div",{className:"preview"},this.props.items.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(W,{key:e.id,item:e})}))))}}]),t}(r.a.Component)),G=(n(62),function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.collections;return r.a.createElement("div",{className:"collection-overview"},Object.values(e).map((function(e){var t=e.id,n=Object(U.a)(e,["id"]);return r.a.createElement(M,Object.assign({key:t},n))})))}}]),t}(r.a.Component)),q=Object(j.b)({collections:P}),J=Object(f.b)(q)(G),z=(n(63),function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.collection,t=e.title,n=e.items;return console.log(e),r.a.createElement("div",{className:"collection-page"},r.a.createElement("div",{className:"title"},t),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(W,{id:e.id,item:e})}))))}}]),t}(r.a.Component)),H=Object(f.b)((function(e,t){return{collection:(n=t.match.params.categoryID,Object(j.a)([C],(function(e){return e[n]})))(e)};var n}))(z),L=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(g.b,{exact:!0,path:"".concat(e.path),component:J}),r.a.createElement(g.b,{path:"".concat(e.path,"/:categoryID"),component:H}))}}]),t}(r.a.Component),F=Object(j.b)({collections:P}),V=Object(f.b)(F)(L),_=n(16);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Y=r.a.createElement("title",null,"Group"),X=r.a.createElement("desc",null,"Created with Sketch."),Z=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),$=function(e){var t=e.svgRef,n=e.title,a=Q(e,["svgRef","title"]);return r.a.createElement("svg",K({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?Y:n?r.a.createElement("title",null,n):null,X,Z)},ee=r.a.forwardRef((function(e,t){return r.a.createElement($,K({svgRef:t},e))})),te=(n.p,n(64),n(24)),ne=n.n(te);n(65),n(67);function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r,c,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=le.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(r=e.sent,console.log("Snapshot generated"),!1!==r.exists){e.next=19;break}return c=t.displayName,i=t.email,l=new Date,e.prev=10,e.next=13,a.set(re({displayName:c,email:i,createdAt:l},n));case 13:console.log("User added"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(10),console.log("Error!!!");case 19:return e.abrupt("return",a);case 20:case"end":return e.stop()}}),e,null,[[10,16]])})));return function(t,n){return e.apply(this,arguments)}}();ne.a.initializeApp({apiKey:"AIzaSyAEC1jlJkeGMsGvoCZgBjSp2ECP-Oq8DKQ",authDomain:"vkd-kart.firebaseapp.com",databaseURL:"https://vkd-kart.firebaseio.com",projectId:"vkd-kart",storageBucket:"vkd-kart.appspot.com",messagingSenderId:"732634600773",appId:"1:732634600773:web:2f0b92e5802f5b5809da2c",measurementId:"G-SW56CLZFH7"});var ie=ne.a.auth(),le=ne.a.firestore(),oe=new ne.a.auth.GoogleAuthProvider;oe.setCustomParameters({prompt:"select_account"});var se=function(){return ie.signInWithPopup(oe)},ue=(ne.a,function(e){return e.cart}),pe=Object(j.a)([ue],(function(e){return e.visible})),me=Object(j.a)([ue],(function(e){return e.cartItems})),be=Object(j.a)([me],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),de=Object(j.a)([me],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),he=Object(j.a)([function(e){return e.user}],(function(e){return e.currentUser}));function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ge(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Oe=r.a.createElement("g",null),ve=r.a.createElement("g",null),je=r.a.createElement("g",null),ye=r.a.createElement("g",null),Ee=r.a.createElement("g",null),ke=r.a.createElement("g",null),we=r.a.createElement("g",null),Ne=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Se=r.a.createElement("g",null),Ie=r.a.createElement("g",null),xe=r.a.createElement("g",null),De=r.a.createElement("g",null),Te=function(e){var t=e.svgRef,n=e.title,a=ge(e,["svgRef","title"]);return r.a.createElement("svg",fe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Oe,ve,je,ye,Ee,ke,we,Ne,Ce,Pe,Ue,Se,Ie,xe,De)},Be=r.a.forwardRef((function(e,t){return r.a.createElement(Te,fe({svgRef:t},e))})),Ae=(n.p,n(71),function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cart-icon",onClick:this.props.ToggleCartDisplay},r.a.createElement(Be,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},this.props.itemCount))}}]),t}(r.a.Component)),Re=Object(j.b)({itemCount:be}),We=Object(f.b)(Re,(function(e){return{ToggleCartDisplay:function(){return e(B())}}}))(Ae),Me=(n(72),n(73),function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.imageUrl,n=e.price,a=e.name,c=e.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:t,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c," x $",n)))}}]),t}(r.a.Component)),Ge=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},this.props.cartItems.length>0?this.props.cartItems.map((function(e){return r.a.createElement(Me,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-cart"},"Your cart is empty")),r.a.createElement(S,{onClick:function(){e.props.history.push("/checkout"),e.props.dispatch(B())}},"GO TO CHECKOUT"))}}]),t}(r.a.Component),qe=Object(j.b)({cartItems:me}),Je=Object(g.g)(Object(f.b)(qe)(Ge)),ze=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.currentUser;return r.a.createElement("div",{className:"header"},r.a.createElement(_.b,{to:"/",className:"logo-container"},r.a.createElement(ee,{className:"logo"})),r.a.createElement("div",{className:"option-links"},r.a.createElement(_.b,{to:"/shop",className:"option"},"SHOP"),r.a.createElement(_.b,{to:"/",className:"option"},"CONTACT"),e?r.a.createElement("div",{className:"option",onClick:function(){return ie.signOut()}},"SIGN OUT"):r.a.createElement(_.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(We,null)),this.props.visible?r.a.createElement(Je,null):null)}}]),t}(r.a.Component),He=Object(j.b)({currentUser:he,visible:pe}),Le=Object(f.b)(He)(ze),Fe=(n(74),n(75),n(76),function(e){var t=e.label,n=e.handleChange,a=Object(U.a)(e,["label","handleChange"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:n},a)),t?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},t):null)}),Ve=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(b.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,ie.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("Error while signing in with email and pwd!-- ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(s.a)({},a,r))},n.state={email:"",password:""},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account."),r.a.createElement("span",null,"Enter your email and password : "),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Fe,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Fe,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"Password",required:!0}),r.a.createElement("div",{className:"form-footer"},r.a.createElement(S,{type:"submit"},"Submit Form"),r.a.createElement(S,{onClick:se,isGoogleSignIn:!0},"Sign In With Google"))))}}]),t}(r.a.Component),_e=(n(77),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(b.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r,c,i,l,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){e.next=5;break}return alert("Passwords don't match. Retry."),e.abrupt("return");case 5:return e.prev=5,e.next=8,ie.createUserWithEmailAndPassword(c,i);case 8:return s=e.sent,u=s.user,e.next=12,ce(u,{displayName:r});case 12:n.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log("error ! : ",e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(s.a)({},a,r))},n.state={displayName:"",email:"",password:"",confirmPassword:""},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account."),r.a.createElement("span",null,"Create an account with an email and password."),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Fe,{name:"displayName",type:"text",value:t,label:"Display Name",onChange:this.handleChange,required:!0}),r.a.createElement(Fe,{name:"email",type:"email",value:n,label:"Email",onChange:this.handleChange,required:!0}),r.a.createElement(Fe,{name:"password",type:"password",value:a,label:"Password",onChange:this.handleChange,required:!0}),r.a.createElement(Fe,{name:"confirmPassword",type:"password",value:c,label:"Confirm Password",onChange:this.handleChange,required:!0}),r.a.createElement(S,{type:"submit"},"SIGN UP")))}}]),t}(r.a.Component)),Ke=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-register"},r.a.createElement(Ve,null),r.a.createElement(_e,null))}}]),t}(r.a.Component),Qe="SET_CURRENT_USER",Ye=(n(78),n(79),function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cartItem,n=e.clearItem,a=e.AddItem,c=e.removeItem;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:t.imageUrl,alt:"item"})),r.a.createElement("span",{className:"name"},t.name),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},t.quantity),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},"$",t.price),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}}]),t}(r.a.Component)),Xe=Object(f.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:D,payload:e}}(t))},AddItem:function(t){return e(A(t))},removeItem:function(t){return e(function(e){return{type:T,payload:e}}(t))}}}))(Ye),Ze=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block last-header"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(Xe,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",n)))}}]),t}(r.a.Component),$e=Object(j.b)({cartItems:me,total:de}),et=Object(f.b)($e)(Ze);function tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function nt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?tt(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var at=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ie.onAuthStateChanged(function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,ce(n);case 3:t.sent.onSnapshot((function(t){e(nt({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(Le,null),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/vkd-kart",component:N}),r.a.createElement(g.b,{exact:!0,path:"/",component:N}),r.a.createElement(g.b,{path:"/shop",component:V}),r.a.createElement(g.b,{exact:!0,path:"/checkout",component:et}),r.a.createElement(g.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(g.a,{to:"/"}):r.a.createElement(Ke,null)}})))}}]),t}(r.a.Component),rt=Object(j.b)({currentUser:he}),ct=Object(f.b)(rt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Qe,payload:e}}(t))}}}))(at);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var it=n(39),lt=n(17),ot=n(28),st=n(40),ut=n.n(st);function pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function mt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pt(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var bt={currentUser:null},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Qe:return mt({},e,{currentUser:t.payload});default:return e}},ht=n(42);function ft(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function gt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ft(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ft(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ot=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?gt({},e,{quantity:e.quantity+1}):e})):[].concat(Object(ht.a)(e),[gt({},t,{quantity:1})])},vt=function(e,t){return 1!==e.find((function(e){return e.id===t.id})).quantity?e.map((function(e){return e.id===t.id?gt({},e,{quantity:e.quantity-1}):e})):e.filter((function(e){return e.id!==t.id}))};function jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function yt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?jt(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Et={visible:!1,cartItems:[]},kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return yt({},e,{visible:!e.visible});case x:return yt({},e,{cartItems:Ot(e.cartItems,t.payload)});case D:return yt({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case T:return yt({},e,{cartItems:vt(e.cartItems,t.payload)});default:return e}},wt=n(41),Nt={sections:[{subheading:"Wear it like Sparrow!",heading:"Hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{subheading:"Winter HAS come.",heading:"Jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{subheading:"Sports shoes not comfortable, eh?",heading:"Sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{subheading:"The never-ending section",heading:"Womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{subheading:"Nothing fancy",heading:"Mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Pt={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},St={key:"root",storage:n.n(wt).a,whitelist:["cart"]},It=Object(lt.c)({user:dt,cart:kt,directory:Ct,shop:Ut}),xt=Object(ot.a)(St,It),Dt=[ut.a],Tt=Object(lt.d)(xt,lt.a.apply(void 0,Dt)),Bt=Object(ot.b)(Tt);i.a.render(r.a.createElement(f.a,{store:Tt},r.a.createElement(_.a,null,r.a.createElement(it.a,{persistor:Bt},r.a.createElement(ct,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.2eaaf228.chunk.js.map