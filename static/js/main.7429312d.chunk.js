(this.webpackJsonpmayla_co=this.webpackJsonpmayla_co||[]).push([[0],{64:function(e,t,a){e.exports=a.p+"static/media/1.1.464dfa09.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/1.2.d6d0f92e.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/1.3.180b5c7b.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/couch1.de9ab538.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/couch2.d830b3b6.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/couch3.bc2cb3fb.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/couch4.3e43295a.jpg"},73:function(e,t,a){e.exports=a(97)},78:function(e,t,a){},90:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),s=a.n(l);a(78),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(6),o=a(13),i=a(105),u=a(28),m="/home",d=r.a.createContext(null),p=function(e){return function(t){return r.a.createElement(d.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},E=d,h=a(8),f=a(37),g=a.n(f),b=(a(79),a(81),{apiKey:"AIzaSyDmG3L3LQhZ1KQhX6t1b-FjIdmEv1ualZ0",authDomain:"react-firebase-d6dd4.firebaseapp.com",databaseURL:"https://react-firebase-d6dd4.firebaseio.com",projectId:"react-firebase-d6dd4",storageBucket:"react-firebase-d6dd4.appspot.com",messagingSenderId:"694944377444"}),v=function e(){var t=this;Object(h.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},g.a.initializeApp(b),this.auth=g.a.auth(),this.db=g.a.database(),this.serverValue=g.a.database.ServerValue},C=p((function(e){var t=e.firebase;return r.a.createElement("button",{className:"sign_out_b",type:"button",onClick:t.doSignOut},r.a.createElement(c.b,{to:"/"},"Sign Out"))})),N=r.a.createContext(null),y=a(10),O=a(12),j=a(11),w=function(e){var t=function(t){Object(O.a)(n,t);var a=Object(j.a)(n);function n(e){var t;return Object(h.a)(this,n),(t=a.call(this,e)).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})}),(function(){localStorage.removeItem("authUser"),e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return p(t)},S=a(15),k=function(e){return function(t){var a=function(a){Object(O.a)(l,a);var n=Object(j.a)(l);function l(){return Object(h.a)(this,l),n.apply(this,arguments)}return Object(y.a)(l,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(a){e(a)||t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(N.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),l}(r.a.Component);return Object(S.a)(o.e,p)(a)}},x=function(){return r.a.createElement(i.a,{title:"My Account",id:"basic-nav-dropdown"},r.a.createElement(i.a.Item,{as:c.b,to:"/account"},"Profile"),r.a.createElement(i.a.Item,{as:c.b,to:"/cart"},"Cart"),r.a.createElement(C,null))},I=function(){return r.a.createElement(i.a,{title:"My Account",id:"basic-nav-dropdown"},r.a.createElement(u.a.Item,{as:c.b,to:"/signin"},"Sign In"),r.a.createElement(u.a.Item,{as:c.b,to:"/signup"},"Sing Up"))},P=function(){return r.a.createElement(N.Consumer,null,(function(e){return e?r.a.createElement(x,null):r.a.createElement(I,null)}))},A=(a(90),function(){return r.a.createElement("header",{className:"main-navigation text-center"},r.a.createElement("nav",{className:"main-navigation_item "},r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement(c.c,{to:"/"},"Landing")),r.a.createElement("li",null," ",r.a.createElement(c.c,{to:m},"Home")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/contactus"},"Contact Us")),r.a.createElement("li",null,r.a.createElement(P,null)))))}),U=function(){return r.a.createElement("header",{className:"main-navigation"},r.a.createElement("nav",{className:"main-navigation_item"},r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement(c.c,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/contactus"},"Contact Us")),r.a.createElement("li",null,r.a.createElement(P,null)))))},M=function(){return r.a.createElement("div",null,r.a.createElement(N.Consumer,null,(function(e){return e?r.a.createElement(A,null):r.a.createElement(U,null)})))},G=a(64),L=a.n(G),_=a(65),D=a.n(_),T=a(66),R=a.n(T),W=a(38),z=function(){return r.a.createElement(W.a,{className:"carousel"},r.a.createElement(W.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:L.a,alt:"dogo2"})),r.a.createElement(W.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:D.a,alt:"dogo2"})),r.a.createElement(W.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:R.a,alt:"dogo3"})))},V=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"MAYLA & CO | PET SUPPLIES "),r.a.createElement("h5",{className:"mt-5"},'Site is a demonstration of my web development abilities. You can input/update information for current user under My Account > Profile.  Add items to the card and create "fake" orders to demonstrate the site\'s functionality. Feel free to go through the steps of creating an order, watch your cart update, proceed with the order and message the seller.'))},H=a(17),F=a(9),B=a(104),Y=a(67),J={username:"",email:"",passwordOne:"",passwordTwo:"",error:null,name:"",address:"",city:"",state:"",zip:""},K=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,l=t.passwordOne,s=(t.cart,t.name),c=t.address,o=t.city,i=t.state,u=t.zip;t.uid;n.props.firebase.doCreateUserWithEmailAndPassword(r,l).then((function(e){n.props.firebase.user(e.user.uid).set({username:a,email:r,name:s,address:c,city:o,state:i,zip:u}).then((function(){n.setState(Object(F.a)({},J)),n.props.history.push(m)})).catch((function(e){n.setState({error:e})}))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(F.a)({},J),n}return Object(y.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,l=e.passwordTwo,s=e.error,c=n!==l||""===n||""===a||""===t;return r.a.createElement("div",null,r.a.createElement(B.a,{onSubmit:this.onSubmit,className:"container"},r.a.createElement(B.a.Row,null,r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridUsername"},r.a.createElement(B.a.Control,{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Username",className:""})),r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridEmail"},r.a.createElement(B.a.Control,{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address",className:""}))),r.a.createElement(B.a.Row,null,r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridPassword"},r.a.createElement(B.a.Control,{name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password",className:""})),r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridPassword"},r.a.createElement(B.a.Control,{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm Password",className:""}))),r.a.createElement("div",{className:"text-center d-flex "},r.a.createElement("button",{className:"btn btn-dark w-25 ",disabled:c,type:"submit",style:{margin:"auto"}},"Sign Up")),s&&r.a.createElement("p",null,s.message)))}}]),a}(n.Component),Z=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(c.b,{to:"/signup"},"Sign Up"))},q=Object(o.e)(p(K)),$=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"SignUp Form:"),r.a.createElement(q,null))},Q=a(63),X={email:"",error:null},ee=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(F.a)({},X))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(F.a)({},X),n}return Object(y.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("div",null,r.a.createElement("h3",null,"Reset password with Email:"),r.a.createElement("form",{onSubmit:this.onSubmit,className:"d-flex mt-4 mr-2"},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address",className:"mr-2"}),r.a.createElement(Q.a,{variant:"outline-dark",disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message)))}}]),a}(n.Component),te=function(){return r.a.createElement("p",null,r.a.createElement(c.b,{to:"/pw-forget"},"Forgot Password?"))},ae=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(ne,null),r.a.createElement(Z,null))},ne=p(ee),re={email:"",password:"",error:null,guestEmail:"guest@gmail.com",guestPassword:"guestguest"},le=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(F.a)({},re)),n.props.history.push(m)})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.logInGuest=function(e,t){n.props.firebase.doSignInWithEmailAndPassword(e,t).then((function(){n.props.history.push(m)}))},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(F.a)({},re),n}return Object(y.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,l=t.error,s=t.guestEmail,c=t.guestPassword,o=""===n||""===a;return r.a.createElement(B.a,{onSubmit:this.onSubmit,className:"container overflow-hidden"},r.a.createElement("div",{className:"row justify-content-sm-center g-2"},r.a.createElement(B.a.Control,{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address",className:"col-sm-6 col-md-4 ml-1 mr-1 mb-2"}),r.a.createElement(B.a.Control,{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password",className:"col-sm-6 col-md-4 ml-1 mr-1 mb-2"})),r.a.createElement("div",{className:"row g-2 justify-content-sm-center"},r.a.createElement(Q.a,{disabled:o,type:"submit",className:"col-sm-6 col-md-4  ml-1 mr-1 mb-2",variant:"outline-dark"},"Sign In"),r.a.createElement(Q.a,{type:"submit",className:"col-sm-6 col-md-4  ml-1 mr-1 mb-2",variant:"outline-dark",onClick:function(){return e.logInGuest(s,c)}},"Continue as guest")),l&&r.a.createElement("p",null,l.message))}}]),a}(n.Component),se=Object(S.a)(o.e,p)(le),ce=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Sign In"),r.a.createElement(se,null),r.a.createElement(te,null),r.a.createElement(Z,null))},oe=a(68),ie=a.n(oe),ue=a(69),me=a.n(ue),de=a(70),pe=a.n(de),Ee=a(71),he=a.n(Ee),fe=a(102),ge=a(106),be=a(22),ve=(a(32),function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).addToCart=function(e){var t;n.setState({cart:{product:e},added:!0}),be.NotificationManager.success("".concat(e.name," added to the cart"),"",1500);var a=null===(t=n.props.firebase.auth)||void 0===t?void 0:t.currentUser;n.props.firebase.user(a.uid+"/cart").push(Object(F.a)({},e))},n.state={added:!1,cart:[],products:[{name:"Dog Bed #1",product_description:"Great couch for small dogs.",price:75.99,image:ie.a,id:1,quantity:1},{name:"Dog Bed #2",product_description:"Good couch for medium dogs.",price:85.99,image:me.a,id:2,quantity:1},{name:"Dog Bed #3",product_description:"Make your pup fly.",price:95.99,image:pe.a,id:3,quantity:1},{name:"Dog Bed #4",product_description:"Perfect for large dogs.",price:105.99,image:he.a,id:4,quantity:1}]},n}return Object(y.a)(a,[{key:"render",value:function(){var e=this;this.state.added;return r.a.createElement(N.Consumer,null,(function(t){return r.a.createElement(fe.a,{className:"g-2"},e.state.products.map((function(a,n){return r.a.createElement(ge.a,{className:"text-center",key:n},r.a.createElement(ge.a.Body,null,r.a.createElement(ge.a.Img,{variant:"top",src:a.image,className:"card-img"}),r.a.createElement(ge.a.Title,null,r.a.createElement("span",null,a.name)," ",r.a.createElement("span",null,"$",a.price)),r.a.createElement(ge.a.Text,null,a.product_description),r.a.createElement(Q.a,{variant:"dark",className:"",onClick:function(){return e.addToCart(a,t)}},"Add to Cart")))})))}))}}]),a}(n.Component)),Ce=Object(S.a)(o.e,p)(ve),Ne=k((function(e){return!!e}))((function(){return r.a.createElement(N.Consumer,null,(function(e){return r.a.createElement(Ce,null)}))})),ye=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Home Page"),r.a.createElement("h4",null,"Select an item and press add to cart."),r.a.createElement("p",null,"The Home Page is accessible by signed in user.")),r.a.createElement(Ne,null))},Oe=["Choose...","AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"],je={loading:!1,error:null,address:"",address2:"",city:"",email:"",name:"",state:"",uid:"",username:"",zip:""},we=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).stateList=Oe.map((function(e,t){return r.a.createElement("option",{key:t},e)})),n.onSubmit=function(e){var t,a=null===(t=n.props.firebase.auth)||void 0===t?void 0:t.currentUser;n.props.firebase.user(a.uid).update({address:n.state.address,address2:n.state.address2,city:n.state.city,email:n.state.email,name:n.state.name,state:n.state.state,username:n.state.username,zip:n.state.zip}),e.preventDefault(),be.NotificationManager.info("Profile updated successfully","",1500)},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value)),console.log(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(F.a)({},je),n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;this.setState({loading:!0});var a=null===(e=this.props.firebase.auth)||void 0===e?void 0:e.currentUser;a?this.props.firebase.user(a.uid).on("value",(function(e){var a=e.val();t.setState({loading:!1,address:a.address,address2:a.address2,city:a.city,email:a.email,name:a.name,state:a.state,uid:a.uid,username:a.username,zip:a.zip}),t.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.username,l=t.address,s=t.address2,o=t.city,i=t.email,u=t.state,m=t.zip;return r.a.createElement("div",null,r.a.createElement(B.a,{onSubmit:function(t){return e.onSubmit(t)},className:"container"},r.a.createElement(B.a.Row,null,r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridName"},r.a.createElement(B.a.Label,null,"Name"),r.a.createElement(B.a.Control,{type:"text",name:"name",onChange:this.onChange,placeholder:"First & Last Name",defaultValue:a})),r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridUsername"},r.a.createElement(B.a.Label,null,"Username"),r.a.createElement(B.a.Control,{type:"text",name:"username",onChange:this.onChange,placeholder:"Username",defaultValue:n}))),r.a.createElement(B.a.Group,{controlId:"formGridEmail1"},r.a.createElement(B.a.Label,null,"Email"),r.a.createElement(B.a.Control,{name:"email",onChange:this.onChange,placeholder:"Email",defaultValue:i})),r.a.createElement(B.a.Group,{controlId:"formGridAddress1"},r.a.createElement(B.a.Label,null,"Address"),r.a.createElement(B.a.Control,{name:"address",onChange:this.onChange,placeholder:"Street Name & Number",defaultValue:l})),r.a.createElement(B.a.Group,{controlId:"formGridAddress2"},r.a.createElement(B.a.Label,null,"Address 2"),r.a.createElement(B.a.Control,{name:"address2",onChange:this.onChange,placeholder:"Apartment, studio, or floor",defaultValue:s})),r.a.createElement(B.a.Row,null,r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridCity"},r.a.createElement(B.a.Label,null,"City"),r.a.createElement(B.a.Control,{name:"city",onChange:this.onChange,placeholder:"City",value:o})),r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridState"},r.a.createElement(B.a.Label,null,"State"),r.a.createElement(B.a.Control,{name:"state",onChange:this.onChange,value:u,as:"select"},this.stateList)),r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridZip"},r.a.createElement(B.a.Label,null,"Zip"),r.a.createElement(B.a.Control,{name:"zip",onChange:this.onChange,placeholder:"Zip code",value:m}))),r.a.createElement("div",{className:"d-flex justify-content-between mt-2"},r.a.createElement(Q.a,{variant:"outline-dark",className:"mb-2 w-25 p-2"},r.a.createElement(c.b,{className:"",to:"/Messages"},"Message History")),r.a.createElement(Q.a,{variant:"outline-dark",className:"mb-2 w-40 p-2"},r.a.createElement(c.b,{to:"/Edit-info"},"Reset Password"),r.a.createElement("br",null)),r.a.createElement(Q.a,{variant:"outline-dark",className:"mb-2 w-40 p-2"},r.a.createElement(c.b,{to:"/Checkout"},"Checkout"),r.a.createElement("br",null)),r.a.createElement(Q.a,{variant:"outline-dark",className:"mb-2 w-25 p-2",type:"submit"},"Submit"))))}}]),a}(n.Component),Se=Object(S.a)(o.e,p)(we),ke=k((function(e){return!!e}))((function(){return r.a.createElement(N.Consumer,null,(function(e){return r.a.createElement("div",{className:""},r.a.createElement("h1",{className:"text-center"},"Profile Information, ",e.name,":"),r.a.createElement(Se,null))}))})),xe=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={loading:!1,users:[]},n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",(function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(F.a)(Object(F.a)({},a[e]),{},{uid:e})}));e.setState({users:n,loading:!1}),console.log(n)}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),a&&r.a.createElement("div",null,"Loading ..."),r.a.createElement(Ie,{users:t}))}}]),a}(n.Component),Ie=function(e){var t=e.users;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email,r.a.createElement("strong",null,"Username")," ",e.name),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username))})))},Pe=p(xe),Ae=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).cleanCart=function(){var e,t=null===(e=n.props.firebase.auth)||void 0===e?void 0:e.currentUser;n.props.firebase.user(t.uid).update({cart:null}),be.NotificationManager.warning("All items have been removed from the cart","",1500)},n.state={error:null,loading:!1,cart:[]},n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;this.setState({loading:!0});var a=null===(e=this.props.firebase.auth)||void 0===e?void 0:e.currentUser;a?this.props.firebase.user(a.uid+"/cart").on("value",(function(e){var a=e.val();console.log(a),a?t.setState({loading:!1,cart:Object.keys(a).map((function(e){var t=a[e];return Object(F.a)(Object(F.a)({},t),{},{uid:e})}))}):t.setState({loading:!1,cart:[]})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.cart,n=t.loading;return r.a.createElement("div",null,n&&r.a.createElement("div",null,"Loading ..."),a.length>0?r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-between price"},r.a.createElement("button",{type:"button",className:" btn-small btn btn-outline-dark btn-sm ",onClick:function(){return e.cleanCart()}},"Clean Cart"),r.a.createElement("p",{className:"p-price"},"Price")," "),r.a.createElement(Ue,{cart:a,className:"container"}," "),r.a.createElement(Ge,null)):r.a.createElement("div",{className:"mb-3"},"Cart is empty"))}}]),a}(n.Component),Ue=function(e){var t=e.cart;return r.a.createElement("div",null,r.a.createElement("ul",{className:"cart_list"},t.map((function(e){return r.a.createElement(Me,{key:e.uid,cartItem:e})}))),r.a.createElement("div",null,r.a.createElement("ul",{className:" total"},r.a.createElement("li",{className:" text-right"},"Subtotal (",t.length,"  ",1===t.length?r.a.createElement("span",null,"item"):r.a.createElement("span",null,"items"),") :",r.a.createElement("strong",null," $",t.reduce((function(e,t){return e+t.price}),0))))))},Me=function(e){var t=e.cartItem;return r.a.createElement("li",{className:"item_li d-flex justify-content-between mb-3 text-center-sm"},r.a.createElement("img",{src:t.image,className:"item_icon",alt:t.name}),r.a.createElement("div",{className:"flex-fill text-left ml-5"},r.a.createElement("h3",{className:""},t.name),r.a.createElement("h5",{className:""},t.product_description)),r.a.createElement("h4",null,"$",t.price," "))},Ge=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement(Q.a,{variant:"dark"},r.a.createElement(c.c,{className:"button button-dark",to:"/Checkout"},"Proceed to Checkout")))},Le=Object(S.a)(o.e,p)(Ae),_e=Object(S.a)(k((function(e){return!!e}))((function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"My Cart:"),r.a.createElement("div",{className:" text-center container"},r.a.createElement("div",null,r.a.createElement(Le,null))))}))),De=(a(95),a(103)),Te=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onCreateMessage=function(e,t){n.props.firebase.messages().push({userId:t.uid,name:n.state.name,last_name:n.state.last_name,email:n.state.email,text:n.state.text,createdAt:n.props.firebase.serverValue.TIMESTAMP}),n.setState({text:""}),console.log(Object(H.a)({},e.target.name,e.target.value)),e.preventDefault(),n.props.history.push("/submittedPage")},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value)),console.log(Object(H.a)({},e.target.name,e.target.value))},n.state={name:"",last_name:"",email:"",text:"",error:null,loading:!1,userId:"",messages:[]},n}return Object(y.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.last_name,l=t.email,s=t.text,c=t.error,o=(t.messages,t.loading,""===a||""===n||""===l||""===s);return r.a.createElement(N.Consumer,null,(function(t){return r.a.createElement("div",{className:"text-center"},r.a.createElement(B.a,{onSubmit:function(a){return e.onCreateMessage(a,t)},className:"contactUsForm"},r.a.createElement("h1",null,"Contact Us"),r.a.createElement(De.a,null,r.a.createElement(Y.a,null,r.a.createElement(B.a.Control,{name:"name",value:a,onChange:e.onChange,placeholder:"First name"})),r.a.createElement(Y.a,null,r.a.createElement(B.a.Control,{name:"last_name",value:n,onChange:e.onChange,placeholder:"Last name"}))),r.a.createElement(De.a,null,r.a.createElement(Y.a,{className:"mt-2"},r.a.createElement(B.a.Control,{name:"email",value:l,type:"email",onChange:e.onChange,placeholder:"Enter email"}))),r.a.createElement(De.a,null,r.a.createElement(Y.a,{className:"mt-2"},r.a.createElement(B.a.Control,{name:"text",value:s,onChange:e.onChange,placeholder:"Message",as:"textarea",rows:3}))),r.a.createElement("div",{className:"text-center "},r.a.createElement(Q.a,{type:"submit",disabled:o,className:"sendEmail mt-2 ",variant:"outline-dark"},"Send Email")),c&&r.a.createElement("p",null,c.message)))}))}}]),a}(n.Component),Re=Object(S.a)(o.e,p)(Te),We=function(){return r.a.createElement("div",null,r.a.createElement(Re,null))},ze=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"MAYLA & CO  | PET SUPPLIES  \xa9 2020",r.a.createElement("span",{className:"icongroup"},r.a.createElement("i",{className:"fa fa-cc-visa"})," ",r.a.createElement("i",{className:"fa fa-cc-mastercard"}))))},Ve=function(){return r.a.createElement("div",{className:"subPage"},r.a.createElement("h2",null,"Thank You for your email."),r.a.createElement("h4",null,"We will contact you in 24 hours."),r.a.createElement(c.b,{to:m},"Return to Home Page"),r.a.createElement("br",null),r.a.createElement(c.b,{to:"/Messages"},"Check previous Messages"))},He=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={name:"",last_name:"",email:"",text:"",error:null,loading:!1,userId:"",messages:[]},n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.messages().on("value",(function(t){var a=t.val();if(a){console.log(a);var n=Object.keys(a).filter((function(e){return a[e].userId===JSON.parse(localStorage.getItem("authUser")).uid})).map((function(e){return Object(F.a)(Object(F.a)({},a[e]),{},{uid:e})}));e.setState({messages:n,loading:!1})}else e.setState({messages:null,loading:!1});console.log(e.state.messages)}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.messages().off()}},{key:"render",value:function(){var e=this.state,t=e.messages,a=e.loading;return r.a.createElement(N.Consumer,null,(function(e){return r.a.createElement("div",null,a&&r.a.createElement("div",null,"Loading ..."),t?r.a.createElement(Fe,{messages:t}):r.a.createElement("div",null,"There are no messages ..."))}))}}]),a}(n.Component),Fe=function(e){var t=e.messages;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(Be,{key:e.uid,message:e})})))},Be=function(e){var t=e.message,a=new Date(t.createdAt);return r.a.createElement("li",null,r.a.createElement("strong",null,t.name," ",t.last_name)," ",r.a.createElement("br",null),"Time: ",a.toLocaleString(),r.a.createElement("br",null),"Message: ",t.text)},Ye=Object(S.a)(o.e,p)(He),Je=Object(S.a)(k((function(e){return!!e}))((function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Message History:"),r.a.createElement("div",null,r.a.createElement(Ye,null)),r.a.createElement(c.b,{to:"/contactus"},"Go back to Contact Us"))}))),Ke={passwordOne:"",passwordTwo:"",error:null},Ze=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(F.a)({},Ke))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(F.a)({},Ke),n}return Object(y.a)(a,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,l=t!==a||""===t;return r.a.createElement("div",null,r.a.createElement("h3",{className:"mt-3"},"Reset password now:"),r.a.createElement("form",{onSubmit:this.onSubmit,className:"d-flex  mr-2"},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password",className:"mr-2"}),r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password",className:"mr-2"}),r.a.createElement(Q.a,{variant:"outline-dark",disabled:l,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message)))}}]),a}(n.Component),qe=p(Ze),$e=function(){return r.a.createElement("div",null,r.a.createElement(ne,null),r.a.createElement(qe,null))},Qe={loading:!1,error:null,address:"",address2:"",city:"",email:"",name:"",state:"",uid:"",username:"",zip:""},Xe=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).checkout=function(){var e,t=null===(e=n.props.firebase.auth)||void 0===e?void 0:e.currentUser;n.props.firebase.user(t.uid).update({cart:null}),n.props.history.push(m),be.NotificationManager.info("Thank you for your order")},n.state=Object(F.a)({},Qe),n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;this.setState({loading:!0});var a=null===(e=this.props.firebase.auth)||void 0===e?void 0:e.currentUser;a?this.props.firebase.user(a.uid).on("value",(function(e){var a=e.val();t.setState({loading:!1,address:a.address,addres2:a.address2,city:a.city,email:a.email,name:a.name,state:a.state,uid:a.uid,username:a.username,zip:a.zip}),t.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=(t.username,t.address),l=t.address2,s=t.city,o=(t.email,t.state),i=t.zip;return r.a.createElement("div",{className:"container"},r.a.createElement("ul",null,r.a.createElement("strong",null,"1. Shipping information: ")),""===a||null==a?r.a.createElement("span",{className:"li_info"},"Profile information is missing. ",r.a.createElement(c.b,{className:"mr-1",to:"/account"},"Add Information. ")," "):r.a.createElement("ul",{className:"mx-auto"},r.a.createElement("li",{className:"li_info"},a),r.a.createElement("li",{className:"li_info"},n," ",l),r.a.createElement("li",{className:"li_info"},s,", ",o," ",i)),r.a.createElement("ul",{className:"info_list"}," ",r.a.createElement("strong",null,"2. Payment method:"),r.a.createElement("li",{className:"li_info"},r.a.createElement("i",{className:"fa fa-cc-visa mr-1"})," ",r.a.createElement("strong",{className:"mr-1"}," Visa")," ending 2253"),r.a.createElement("li",{className:"li_info"},r.a.createElement(c.b,{className:"mr-1",to:"/account"},"Billing address: "),"Same as shipping address.")),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(Q.a,{variant:"dark",className:"btn button-dark ",onClick:function(){return e.checkout()}},"Place Order & Return Home")))}}]),a}(n.Component),et=Object(S.a)(o.e,p)(Xe),tt=k((function(e){return!!e}))((function(){return r.a.createElement(N.Consumer,null,(function(e){return r.a.createElement("div",{className:""},r.a.createElement("h1",{className:"text-center"},"Checkout"),r.a.createElement("h4",{className:"text-center"},"Please verify information:"),r.a.createElement(et,null))}))})),at=w((function(){return r.a.createElement(c.a,{basename:"/mayla-co"},r.a.createElement("div",null,r.a.createElement(be.NotificationContainer,null),r.a.createElement(M,null),r.a.createElement(z,null),r.a.createElement("div",{className:"main-content"},r.a.createElement(o.a,{exact:!0,path:"/",component:V}),r.a.createElement(o.a,{exact:!0,path:"/signup",component:$}),r.a.createElement(o.a,{exact:!0,path:"/signin",component:ce}),r.a.createElement(o.a,{exact:!0,path:"/pw-forget",component:ae}),r.a.createElement(o.a,{exact:!0,path:m,component:ye}),r.a.createElement(o.a,{exact:!0,path:"/account",component:ke}),r.a.createElement(o.a,{exact:!0,path:"/admin",component:Pe}),r.a.createElement(o.a,{exact:!0,path:"/contactus",component:We}),r.a.createElement(o.a,{exact:!0,path:"/cart",component:_e}),r.a.createElement(o.a,{exact:!0,path:"/submittedPage",component:Ve}),r.a.createElement(o.a,{exact:!0,path:"/Messages",component:Je}),r.a.createElement(o.a,{exact:!0,path:"/Edit-info",component:$e}),r.a.createElement(o.a,{exact:!0,path:"/Checkout",component:tt})),r.a.createElement(ze,null)))}));a(96);s.a.render(r.a.createElement(E.Provider,{value:new v},r.a.createElement(at,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.7429312d.chunk.js.map