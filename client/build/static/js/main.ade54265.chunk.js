(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,a,t){e.exports=t(141)},141:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),i=t.n(c),o=t(8),l=t(23),u=t(173),s=t(184),m=t(185),d=t(183),p=t(20),f=t(178),g=t(179),v=t(82),E=t(180),b=t(176),h=t(19);function y(){var e=Object(h.a)(["\n    query GetUser(\n        $token: String!\n    ) {\n        getUser(token:$token) {\n            username\n            email\n            favourites {\n                _id\n            }\n        }\n    }\n"]);return y=function(){return e},e}var j=Object(o.gql)(y()),k=function(){return localStorage.getItem("token")},O=k(),w=function(e){try{return e.readQuery({query:j,variables:{token:O}}).getUser}catch(a){return}},C=Object(u.a)((function(e){return{root:{textDecoration:"none",textTransform:"uppercase",color:"white",flexGrow:1,"& a":{textDecoration:"none",textTransform:"uppercase",color:"white"}},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),x=function(){var e=C(),a=Object(o.useApolloClient)(),t=w(a),n=function(){localStorage.removeItem("token"),window.location.replace("/")},c=Object(p.g)(),i=function(){return r.a.createElement("div",{"aria-label":"auth-nav"},r.a.createElement(b.a,{onClick:function(){c.push("/add-recipe")}},"Add Recipe"),r.a.createElement(b.a,{onClick:function(){c.push("/profile")}},t.username.toUpperCase()),r.a.createElement(b.a,{name:"logout-button",onClick:n},"Logout"))},u=function(){return r.a.createElement("div",{"aria-label":"unauth-nav"},r.a.createElement(l.b,{to:"/login"},r.a.createElement(b.a,{color:"inherit"},"Login")),r.a.createElement(l.b,{to:"/signup"},r.a.createElement(b.a,{color:"inherit"},"Signup")))};return r.a.createElement("div",{"data-testid":"navbar",className:e.root},r.a.createElement(f.a,{position:"static",color:"primary"},r.a.createElement(g.a,null,r.a.createElement(l.b,{to:"/",className:e.title},r.a.createElement(E.a,{color:"inherit"},r.a.createElement(v.a,{component:"h2",variant:"h6"},"React Apollo Recipes"))),r.a.createElement(b.a,{color:"inherit",onClick:function(){c.push("/search")}},"Search"),t?r.a.createElement(i,{user:t}):r.a.createElement(u,null))))},N=function(){return r.a.createElement("div",null)},S=t(181),D=Object(u.a)((function(e){return{error:{display:"flex",justifyContent:"center",height:"300px",alignItems:"center"}}})),R=function(e){var a=e.message,t=D();return r.a.createElement(S.a,null,r.a.createElement("div",{role:"error",className:t.error},r.a.createElement("h4",null,"Error: "),r.a.createElement("p",null," ",a)))},$=t(182),L=Object(u.a)((function(e){return{loading:{display:"flex",justifyContent:"center",height:"300px",alignItems:"center"}}})),_=function(){var e=L();return r.a.createElement(S.a,null,r.a.createElement("div",{role:"loading",className:e.loading},r.a.createElement($.a,null)))},q=t(114),I=t(112),T=t.n(I),A=Object(q.a)({palette:{primary:T.a},overrides:{MuiButtonBase:{root:{textTransform:"uppercase"}},MuiCssBaseline:{"@global":{html:{WebkitFontSmoothing:"auto"}}}}}),U=localStorage.getItem("token"),P=Object(u.a)((function(e){return{container:{marginTop:"1rem",marginBottom:"1rem"}}})),B=function(e){var a=e.children,t=P(),n=Object(o.useQuery)(j,{variables:{token:U||""}}),c=(n.data,n.loading),i=n.error;return i?r.a.createElement(d.a,{theme:A},r.a.createElement(s.a,null),r.a.createElement(x,null),r.a.createElement(m.a,{maxWidth:"sm",className:t.container},r.a.createElement(R,{message:i.message})),r.a.createElement(N,null)):c?r.a.createElement(d.a,{theme:A},r.a.createElement(s.a,null),r.a.createElement(x,null),r.a.createElement(m.a,{maxWidth:"sm",className:t.container},r.a.createElement(_,null)),r.a.createElement(N,null)):r.a.createElement(d.a,{theme:A},r.a.createElement(s.a,null),r.a.createElement(x,null),r.a.createElement(m.a,{maxWidth:"sm",className:t.container},a),r.a.createElement(N,null))},Q=t(53),M=t(21),F=t(18),G=t(117),W=t(193);function V(){var e=Object(h.a)(["\nmutation CreateUser(\n    $username: String!\n    $email: String!\n    $password: String!\n    ){\n      signupUser(\n        username: $username, \n        email: $email, \n        password: $password\n      ){\n        token\n      }\n  }\n"]);return V=function(){return e},e}var z=Object(o.gql)(V()),J=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","& .MuiTextField-root":{marginTop:e.spacing(2),width:"70%"}},paper:{padding:"1rem",paddingBottom:"3rem"},button:{marginTop:"2rem"}}})),H={username:"",email:"",password:"",confirmPassword:""},K=function(){var e=Object(n.useState)(Object(M.a)({},H)),a=Object(F.a)(e,2),t=a[0],c=a[1],i=J(),l=Object(o.useMutation)(z),u=Object(F.a)(l,2),s=u[0],m=u[1].error,d=function(e){var a=e.target,t=a.name,n=a.value;c((function(e){return Object(M.a)(Object(M.a)({},e),{},Object(Q.a)({},t,n))}))};return m?r.a.createElement(R,{message:m.message}):r.a.createElement(G.a,{className:i.paper},r.a.createElement(v.a,{variant:"h5",component:"h1",align:"center",className:i.heading},"Sign Up"),r.a.createElement("form",{noValidate:!0,className:i.root,autoComplete:"off"},r.a.createElement(W.a,{name:"username",label:"Username",value:t.username,onChange:function(e){return d(e)},variant:"outlined"}),r.a.createElement(W.a,{name:"email",label:"Email",value:t.email,onChange:function(e){return d(e)},variant:"outlined"}),r.a.createElement(W.a,{name:"password",label:"Password",value:t.password,onChange:function(e){return d(e)},type:"password",autoComplete:"current-password",variant:"outlined"}),r.a.createElement(W.a,{name:"confirmPassword",label:"Confirm Password",value:t.confirmPassword,onChange:function(e){return d(e)},type:"password",variant:"outlined"}),r.a.createElement(E.a,{variant:"contained",color:"primary",className:i.button,onClick:function(e){return function(e){e.preventDefault(),s({variables:Object(M.a)({},t)}).then((function(e){window.location.assign("/login")})).catch((function(e){console.log(e)}))}(e)},type:"submit",name:"submitButton"},"Submit")))},X=t(86),Y=t.n(X),Z=t(113);function ee(){var e=Object(h.a)(["\n    query GetProfile(\n        $token: String!\n    ){\n        getProfile(\n            token: $token\n        ){\n            user{\n                _id\n                username\n                email\n                joinDate\n                favourites {\n                    _id\n                }\n            }\n            favRecipes {\n                _id\n                likes\n                category\n                name\n                username\n            }\n            createdRecipes {\n                _id\n                likes\n                category\n                name\n            }\n        }\n    }\n"]);return ee=function(){return e},e}var ae=Object(o.gql)(ee()),te=function(e,a,t){var n=e.target,r=n.name,c=n.value;a((function(e){return Object(M.a)(Object(M.a)({},e),{},Object(Q.a)({},r,c))})),t(!1)};function ne(){var e=Object(h.a)(["\nmutation LoginUser(\n  $username: String!\n  $password: String!\n  ){\n    loginUser(\n      username: $username, \n      password: $password\n    ){\n      token\n    }\n}\n"]);return ne=function(){return e},e}var re=Object(o.gql)(ne()),ce=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","& .MuiTextField-root":{marginTop:e.spacing(2),width:"70%"}},paper:{padding:"1rem",paddingBottom:"3rem"},button:{marginTop:"2rem"}}})),ie={username:"",password:""},oe=function(){var e=Object(n.useState)(Object(M.a)({},ie)),a=Object(F.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(F.a)(i,2),u=(l[0],l[1]),s=ce(),m=Object(o.useMutation)(re),d=Object(F.a)(m,1)[0],p=Object(o.useApolloClient)();return r.a.createElement(G.a,{className:s.paper},r.a.createElement(v.a,{variant:"h5",component:"h1",align:"center",className:s.heading},"Login"),r.a.createElement("form",{noValidate:!0,className:s.root,autoComplete:"off"},r.a.createElement(W.a,{name:"username",label:"Username",value:t.username,onChange:function(e){return te(e,c,u)},variant:"outlined"}),r.a.createElement(W.a,{name:"password",label:"Password",value:t.password,onChange:function(e){return te(e,c,u)},type:"password",autoComplete:"current-password",variant:"outlined"}),r.a.createElement(E.a,{variant:"contained",color:"primary",className:s.button,onClick:function(e){return function(e,a,t,n){e.preventDefault(),function(e,a){var t=e.username,n=e.password;return!(!t||!n)}(t)&&a({variables:Object(M.a)({},t)}).then(function(){var e=Object(Z.a)(Y.a.mark((function e(a){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("token",a.data.loginUser.token),e.next=3,n.query({query:ae,variables:{token:a.data.loginUser.token}});case 3:window.location.assign("/");case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}(e,d,t,p)},type:"submit"},"Login")))},le=t(190),ue=t(189),se=t(143),me=t(191);function de(){var e=Object(h.a)(["\n    query { \n        getAllRecipes{\n        _id\n        name\n        category\n        description\n        username\n        likes\n        instructions\n        }\n    }\n"]);return de=function(){return e},e}var pe=Object(o.gql)(de()),fe=Object(u.a)((function(e){return{card:{"& a":{textDecoration:"none"},margin:"1rem 0"},loading:{display:"flex",justifyContent:"center",height:"300px",alignItems:"center"},header:{display:"flex",justifyContent:"space-between",flexDirection:"row"},likes:{padding:"0.5rem"}}})),ge=function(){var e=Object(o.useQuery)(pe),a=e.loading,t=e.error,n=e.data,c=fe();if(a)return r.a.createElement(_,null);if(t)return r.a.createElement(R,{message:t.message});var i=function(e){var a=e.recipe;return r.a.createElement(S.a,{className:c.card},r.a.createElement(le.a,null,r.a.createElement("div",{className:c.header},r.a.createElement(l.b,{to:"/recipe/".concat(a._id)},r.a.createElement(v.a,{variant:"h5",component:"h2"},a.name)),r.a.createElement(v.a,{className:c.likes},"Likes: ",a.likes)),r.a.createElement(ue.a,null,r.a.createElement(se.a,null,r.a.createElement(me.a,{primary:"Category",secondary:a.category})),r.a.createElement(se.a,null,r.a.createElement(me.a,{primary:"Description",secondary:a.description})),r.a.createElement(se.a,null,r.a.createElement(me.a,{primary:"Creator",secondary:a.username})),r.a.createElement(se.a,null,r.a.createElement(me.a,{primary:"Instructions",secondary:a.instructions})))))};return r.a.createElement(r.a.Fragment,null,n&&n.getAllRecipes.map((function(e){return r.a.createElement(i,{key:e._id,recipe:e})})))};function ve(){var e=Object(h.a)(["\n    query RecipeSearch($searchTerm:String){\n        recipeSearch(searchTerm:$searchTerm){\n            _id\n            name\n            likes\n        }\n    }\n"]);return ve=function(){return e},e}var Ee=Object(o.gql)(ve()),be=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","& .MuiTextField-root":{marginTop:e.spacing(2),width:"70%"}},header:{display:"flex",justifyContent:"space-between",flexDirection:"row"},likes:{padding:"0.5rem"},card:{marginTop:e.spacing(2)},paper:{padding:"1rem",paddingBottom:"3rem"},button:{marginTop:"2rem"}}})),he=function(){var e=Object(n.useState)(""),a=Object(F.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)([]),u=Object(F.a)(i,2),s=u[0],m=u[1],d=Object(o.useLazyQuery)(Ee,{variables:{searchTerm:t},onCompleted:function(e){try{m(e.recipeSearch)}catch(a){console.log("no data found")}}}),p=Object(F.a)(d,2),f=p[0],g=p[1],E=g.error,b=g.refetch,h=be();if(E)return r.a.createElement(R,{message:E.message});var y=function(e){var a=e.recipe;return r.a.createElement(S.a,{className:h.card},r.a.createElement(le.a,null,r.a.createElement("div",{className:h.header},r.a.createElement(l.b,{to:"/recipe/".concat(a._id)},r.a.createElement(v.a,{variant:"h5",component:"h2"},a.name)),r.a.createElement(v.a,{className:h.likes},"Likes: ",a.likes))))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{className:h.paper},r.a.createElement(v.a,{variant:"h5",component:"h1",align:"center",className:h.heading},"Search"),r.a.createElement("form",{noValidate:!0,className:h.root,autoComplete:"off"},r.a.createElement(W.a,{name:"search",label:"Enter search term",placeholder:"Enter search term",type:"search",value:t,onChange:function(e){return function(e){var a=e.target.value;c(a),f()}(e)},variant:"outlined",onBlur:function(){s.called&&b({variables:{searchTerm:t}}).then((function(e){m(e.data.recipeSearch)})).catch((function(e){console.log(e)}))}}))),s.map((function(e){return r.a.createElement(y,{key:e._id,recipe:e})})))},ye=t(188),je=t(195),ke=t(192),Oe=localStorage.getItem("token"),we=function(e,a){try{var t=e.readQuery({query:ae,variables:{token:Oe}}).getProfile;e.writeQuery({query:ae,variables:{token:Oe},data:{getProfile:Object(M.a)(Object(M.a)({},t),{},{createdRecipes:a})}})}catch(n){window.location.assign("/"),console.log(n)}},Ce=t(81),xe=function(e,a){return e.filter((function(e){return e._id!==a}))},Ne=function(e,a){return[a].concat(Object(Ce.a)(e))},Se=function(e,a){var t=!1;return e.forEach((function(e){e._id===a&&(t=!0)})),t},De=function(e){try{return e.favourites}catch(a){return[]}},Re=function(e,a){try{var t=e.readQuery({query:pe});e.writeQuery({query:pe,data:{getAllRecipes:[a].concat(Object(Ce.a)(t.getAllRecipes))}})}catch(n){window.location.assign("/"),console.log(n)}};function $e(){var e=Object(h.a)(["\nmutation AddRecipe(\n    $name: String!\n    $category: String!\n    $description: String!\n    $instructions: String!\n    ) {\n        addRecipe(\n          name:$name,\n          category: $category,\n          description: $description,\n          instructions: $instructions\n          ) {\n            _id\n            name\n            category\n            description\n            username\n          }\n      }\n"]);return $e=function(){return e},e}var Le=Object(o.gql)($e()),_e=k(),qe=function(e){try{return e.readQuery({query:ae,variables:{token:_e}}).getProfile}catch(a){return}},Ie=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center","& .MuiTextField-root":{marginTop:e.spacing(2),width:"100%"}},formControl:{marginTop:e.spacing(2),width:"50%"},paper:{padding:"1rem",paddingBottom:"3rem"},button:{marginTop:"2rem"}}})),Te={name:"",category:"",description:"",instructions:""},Ae=function(){var e=Object(n.useState)(Object(M.a)({},Te)),a=Object(F.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)(!1),l=Object(F.a)(i,2),u=l[0],s=l[1],m=Object(o.useApolloClient)(),d=Ie(),p=Object(o.useMutation)(Le),f=Object(F.a)(p,1)[0];return r.a.createElement(G.a,{className:d.paper},r.a.createElement(v.a,{variant:"h5",component:"h1",align:"center",className:d.heading},"Add Recipe"),r.a.createElement("form",{noValidate:!0,className:d.root,autoComplete:"off"},r.a.createElement(W.a,{name:"name","aria-label":"name",label:"Recipe Name",value:t.name,onChange:function(e){return te(e,c,s)},variant:"outlined"}),r.a.createElement(W.a,{name:"description","aria-label":"description",label:"Description",value:t.description,onChange:function(e){return te(e,c,s)},variant:"outlined",multiline:!0,rows:2}),r.a.createElement(ye.a,{variant:"outlined",className:d.formControl},r.a.createElement(je.a,{id:"demo-simple-select-outlined-label"},"Category"),r.a.createElement(ke.a,{variant:"outlined",name:"category","aria-label":"category-select",value:t.category,onChange:function(e){return te(e,c,s)},label:"Category"},r.a.createElement(b.a,{value:"Breakfast"},"Breakfast"),r.a.createElement(b.a,{value:"Lunch"},"Lunch"),r.a.createElement(b.a,{value:"Dinner"},"Dinner"),r.a.createElement(b.a,{value:"Snack"},"Snack"))),r.a.createElement(W.a,{name:"instructions","aria-label":"instructions",label:"Instructions",value:t.instructions,onChange:function(e){return te(e,c,s)},variant:"outlined",multiline:!0,rows:10}),u&&r.a.createElement(v.a,null,"Invalid form fields"),r.a.createElement(E.a,{variant:"contained","aria-label":"submit-button",color:"primary",className:d.button,onClick:function(e){return function(e){if(e.preventDefault(),function(e,a){var t=a.name,n=a.description,r=a.instructions,c=a.category;return!!(t&&n&&r&&c)||(e(!0),!1)}(s,t)){var a=qe(m);f({variables:{name:t.name,category:t.category,description:t.description,instructions:t.instructions},update:function(e,t){var n=t.data.addRecipe;if(Re(e,n),a){var r=a.createdRecipes,c=Ne(r,n);we(e,c)}}}).then((function(e){})).catch((function(e){console.log(e)}))}}(e)},type:"submit"},"Create")))};function Ue(){var e=Object(h.a)(["\n    mutation RemoveLike($id: ID!){\n        removeLike(id:$id){\n            _id\n            name\n            category\n            description\n            instructions\n            likes\n        }\n    }\n\n"]);return Ue=function(){return e},e}var Pe=Object(o.gql)(Ue()),Be=localStorage.getItem("token"),Qe=function(e,a){var t=w(e);!function(e,a,t){try{e.writeQuery({query:ae,variables:{token:Be},data:{getProfile:{user:Object(M.a)(Object(M.a)({},a.user),{},{favourites:t}),favRecipes:t}}})}catch(n){console.log(n)}}(e,qe(e),a),function(e,a,t){try{e.writeQuery({query:j,variables:{token:Be},data:{getUser:Object(M.a)(Object(M.a)({},a),{},{favourites:t})}})}catch(n){console.log(n)}}(e,t,a)},Me=Object(u.a)((function(e){return{header:{display:"flex",justifyContent:"space-between",flexDirection:"row","& a":{textDecoration:"none"}},likes:{padding:"0.5rem"},card:{marginTop:e.spacing(2),minWidth:"80%"}}})),Fe=function(e){var a=e.user,t=e.recipe,n=t._id,c=Object(o.useMutation)(Pe),i=Object(F.a)(c,1)[0],u=Me();return r.a.createElement(S.a,{"data-testid":"user-favourites",className:u.card},r.a.createElement(le.a,null,r.a.createElement("div",{className:u.header},r.a.createElement(l.b,{to:"/recipe/".concat(t._id)},r.a.createElement(v.a,{variant:"h5",component:"h2"},t.name)),r.a.createElement(v.a,{className:u.likes},"Likes: ",t.likes)),r.a.createElement(ue.a,null,r.a.createElement(se.a,null,r.a.createElement(me.a,{primary:"Category",secondary:t.category}))),r.a.createElement(E.a,{color:"default",variant:"contained","aria-label":"unlike-button",onClick:function(){return t._id,void i({variables:{id:n},update:function(e,t){var r=a.favourites,c=xe(r,n);Qe(e,c)}})},className:u.button},"Unlike")))};function Ge(){var e=Object(h.a)(["\n    mutation DeleteRecipe($id: ID!){\n        deleteRecipe(id:$id) {\n            _id\n            name\n        }\n    }\n"]);return Ge=function(){return e},e}var We=Object(o.gql)(Ge());function Ve(){var e=Object(h.a)(["\n    mutation AddLike($id: ID!){\n        addLike(id:$id){\n            _id\n            name\n            category\n            description\n            instructions\n            likes\n        }\n    }\n"]);return Ve=function(){return e},e}var ze=Object(o.gql)(Ve()),Je=function(e,a){var t=a.user,n=a.liked,r=a.addLike,c=a.removeLike,i=a.userLiked,o=void 0===i||i;n?c({variables:{id:e},update:function(a,n){var r=t.favourites,c=xe(r,e);Qe(a,c)}}):(o=!o,r({variables:{id:e},update:function(a,n){var r=t.favourites,c=Ne(r,{__typename:"Recipe",_id:e});Qe(a,c)}}))},He=function(e,a){try{e.writeQuery({query:pe,data:{getAllRecipes:a}})}catch(t){window.location.assign("/"),console.log(t)}},Ke=Object(u.a)((function(e){return{header:{display:"flex",justifyContent:"space-between",flexDirection:"row","& a":{textDecoration:"none"}},likes:{padding:"0.5rem"},card:{marginTop:e.spacing(2),minWidth:"80%"},buttonDiv:{display:"flex","& button":{marginRight:"1rem"}}}})),Xe=function(e){var a=e.recipe,t=e.createdRecipes,n=e.user,c=Object(o.useMutation)(We),i=Object(F.a)(c,1)[0],u=Ke(),s=De(n),m=Se(s,a._id),d=Object(o.useMutation)(ze),p=Object(F.a)(d,1)[0],f=function(e){i({variables:{id:e},update:function(a,n){var r=function(e){try{return e.readQuery({query:pe}).getAllRecipes}catch(a){return}}(a);if(r){var c=xe(r,e);He(a,c)}var i=xe(t,e);if(we(a,i),m){var o=xe(s,e);Qe(a,o)}}})};return r.a.createElement(S.a,{"data-testid":"user-recipe",className:u.card},r.a.createElement(le.a,null,r.a.createElement("div",{className:u.header},r.a.createElement(l.b,{to:"/recipe/".concat(a._id)},r.a.createElement(v.a,{variant:"h5",component:"h2"},a.name)),r.a.createElement(v.a,{className:u.likes},"Likes: ",a.likes)),r.a.createElement(ue.a,null,r.a.createElement(se.a,null,r.a.createElement(me.a,{primary:"Category",secondary:a.category}))),r.a.createElement("div",{className:u.buttonDiv},m?null:r.a.createElement(E.a,{color:"default",variant:"contained",onClick:function(){return Je(a._id,{user:n,addLike:p})},className:u.button},"Like"),r.a.createElement(E.a,{color:"secondary",variant:"contained",onClick:function(){return f(a._id)},className:u.button},"Delete"))))},Ye=Object(u.a)((function(e){return{card:{margin:"1rem 0"},header:{display:"flex",justifyContent:"space-between",flexDirection:"row"},likes:{padding:"0.5rem"},favs:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"1rem"},buttonDiv:{display:"flex"}}})),Ze=function(e){var a=new Date(e).toLocaleDateString("en-GB"),t=new Date(e).toLocaleTimeString("en-GB");return"".concat(a," at ").concat(t)},ea=function(){var e=Ye(),a=localStorage.getItem("token"),t=Object(o.useQuery)(ae,{variables:{token:a}}),n=t.data,c=t.loading,i=t.error;if(c)return r.a.createElement(_,null);if(i)return r.a.createElement(R,{message:i.message});if(n.getProfile){var l=n.getProfile.user,u=n.getProfile.favRecipes,s=n.getProfile.createdRecipes,m=0===u.length,d=0===s.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{classusername:e.card},r.a.createElement(le.a,null,r.a.createElement("div",{className:e.header},r.a.createElement(v.a,{variant:"h5",component:"h2"},l.username)),r.a.createElement(ue.a,null,r.a.createElement(se.a,null,r.a.createElement(me.a,{primary:"Email",secondary:l.email})),r.a.createElement(se.a,null,r.a.createElement(me.a,{primary:"Join Date",secondary:Ze(l.joinDate)}))),r.a.createElement(E.a,{variant:"contained",color:"primary"},"Do Something"))),m?r.a.createElement("div",{className:e.favs},r.a.createElement(v.a,{align:"center",variant:"h5"},"No Favourites")):r.a.createElement("div",{className:e.favs},r.a.createElement(v.a,{align:"center",variant:"h5"},"Favourites"),u.map((function(e){return r.a.createElement(Fe,{key:e._id,user:l,recipe:e})}))),d?r.a.createElement("div",{className:e.favs},r.a.createElement(v.a,{align:"center",variant:"h5"},"No Created Recipes")):r.a.createElement("div",{className:e.favs},r.a.createElement(v.a,{align:"center",variant:"h5"},"User Created Recipes"),s.map((function(e){return r.a.createElement(Xe,{user:l,key:e._id,createdRecipes:s,recipe:e})}))))}return r.a.createElement("p",null,"Who knows ?")};function aa(){var e=Object(h.a)(["\n    query GetRecipe($id:ID!){\n        getRecipe(id:$id){\n            _id\n            name\n            category\n            description\n            instructions\n            likes\n        }\n    }\n"]);return aa=function(){return e},e}var ta=Object(o.gql)(aa()),na=Object(u.a)((function(e){return{card:{margin:"1rem 0"},loading:{display:"flex",justifyContent:"center",height:"300px",alignItems:"center"},header:{display:"flex",justifyContent:"space-between",flexDirection:"row"},likes:{padding:"0.5rem"}}})),ra=function(){var e=na(),a=Object(o.useApolloClient)(),t=w(a),c=Object(n.useState)(!1),i=Object(F.a)(c,2),l=i[0],u=i[1],s=Object(o.useMutation)(ze),m=Object(F.a)(s,1)[0],d=Object(o.useMutation)(Pe),f=Object(F.a)(d,1)[0],g=Object(p.h)().id,b=Object(o.useQuery)(ta,{variables:{id:g}}),h=b.data,y=b.error,j=b.loading;return Object(n.useEffect)((function(){var e=De(t),a=Se(e,g);u(a)}),[t,l,g]),j?r.a.createElement(_,null):y?r.a.createElement(R,{message:y.message}):r.a.createElement(S.a,{className:e.card},r.a.createElement(le.a,null,h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.header},r.a.createElement(v.a,{"aria-label":"recipe-header",variant:"h5",component:"h2"},h.getRecipe.name),r.a.createElement(v.a,{"aria-label":"recipe-likes",className:e.likes},"Likes: ",h.getRecipe.likes)),r.a.createElement(ue.a,null,r.a.createElement(se.a,null,r.a.createElement(me.a,{primary:"Category",secondary:h.getRecipe.category})),r.a.createElement(se.a,null,r.a.createElement(me.a,{primary:"Description",secondary:h.getRecipe.description})),r.a.createElement(se.a,null,r.a.createElement(me.a,{primary:"Instructions",secondary:h.getRecipe.instructions}))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"contained",color:"primary","aria-label":"like-button",onClick:function(e){return Je(g,{addLike:m,removeLike:f,liked:l,user:t})}},l?r.a.createElement("span",null,"Liked"):r.a.createElement("span",null,"Like"))))))},ca=k(),ia=function(e){return function(a){var t=Object(o.useQuery)(j,{variables:{token:ca||""}}),n=t.data,c=t.loading,i=t.error;return c?r.a.createElement(_,null):n&&null!==n.getUser?r.a.createElement(e,a):i?r.a.createElement(R,{message:i.message}):r.a.createElement(p.a,{to:"/"})}},oa=function(){return r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,component:ge}),r.a.createElement(p.b,{path:"/search",component:he}),r.a.createElement(p.b,{path:"/add-recipe",component:ia(Ae)}),r.a.createElement(p.b,{path:"/recipe/:id",component:ra}),r.a.createElement(p.b,{path:"/profile",component:ia(ea)}),r.a.createElement(p.b,{path:"/login",component:oe}),r.a.createElement(p.b,{path:"/signup",component:K}))},la=new o.ApolloLink((function(e,a){var t=localStorage.getItem("token");return e.setContext({headers:{authorization:t||""}}),a(e).map((function(a){var t=e.getContext().response.headers;if(t){var n=t.get("authorization"),r=t.get("Access-Control-Refresh-Token");r&&localStorage.setItem("token",r),"expired"!==n||a.data.loginUser||localStorage.removeItem("token")}return a}))})),ua=new o.HttpLink({uri:"http://localhost:4000"}),sa=new o.ApolloClient({link:la.concat(ua),cache:new o.InMemoryCache,onError:function(e){console.log(e)}});var ma=function(){return r.a.createElement(o.ApolloProvider,{client:sa},r.a.createElement(l.a,null,r.a.createElement(B,null,r.a.createElement(oa,null))))};i.a.render(r.a.createElement(ma,null),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.ade54265.chunk.js.map