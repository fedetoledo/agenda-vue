(function(t){function e(e){for(var s,n,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/College-Agenda/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02ce":function(t,e,a){},"1b7e":function(t,e,a){},"1f84":function(t,e,a){"use strict";var s=a("51d2"),i=a.n(s);i.a},2582:function(t,e,a){},"2fe3":function(t,e,a){"use strict";var s=a("02ce"),i=a.n(s);i.a},"4afd":function(t,e,a){},"51d2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),a("main",[a("router-view")],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"menu"},[a("template",{slot:"brand"},[a("b-navbar-item",{staticClass:"titulo",attrs:{tag:"router-link",to:{path:"/dashboard"}}},[t._v("College Agenda")])],1),a("template",{slot:"end"},[a("b-navbar-item",{attrs:{tag:"div"}},[t.user.loggedIn?[a("span",{staticClass:"greeting"},[t._v("Hola, "+t._s(t.user.data.displayName)+" ")]),t._v(" "),a("b-button",{on:{click:t.signOut}},[t._v("Cerrar Sesion")])]:a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button is-dark",attrs:{to:"/login"}},[t._v("Sign in")]),a("router-link",{staticClass:"button is-light",attrs:{to:"/register"}},[t._v("Sign up")])],1)],2)],1)],2)},r=[],c=(a("ac1f"),a("5319"),a("59ca")),l=a.n(c),d={computed:{user:function(){return this.$store.getters.user}},methods:{signOut:function(){var t=this;l.a.auth().signOut().then((function(){t.$store.dispatch("logout"),t.$router.replace({name:"login"})}))}}},u=d,m=(a("d1be"),a("2877")),p=Object(m["a"])(u,n,r,!1,null,"f91529fc",null),f=p.exports,b=(a("b3a4"),{name:"App",components:{navbar:f}}),h=b,v=Object(m["a"])(h,i,o,!1,null,null,null),g=v.exports,C=a("289d");a("5abe");s["a"].use(C["a"]);var x=a("2f62"),w=(a("a4d3"),a("e01a"),a("4de4"),a("c740"),a("4160"),a("a434"),a("159b"),a("bc3a")),j=a.n(w),y=a("8aa5"),_=a.n(y),E="https://agenda-vue-django-api.herokuapp.com/api/todos/",S={todos:[],filter:"all",loading:!0},k={getTodos:function(t){return t.todos},todosFiltered:function(t){return"all"==t.filter?t.todos:"baja"==t.filter?t.todos.filter((function(t){return 0==t.priority})):"media"==t.filter?t.todos.filter((function(t){return 1==t.priority})):"alta"==t.filter?t.todos.filter((function(t){return 2==t.priority})):t.todos}},T={retrieveTodos:function(t){t.state.loading=!0,j.a.get(E).then((function(e){var a=[],s=e.data.filter((function(t){return t.userUid==_.a.auth().currentUser.uid}));s.forEach((function(t){var e={id:t.id,title:t.title,description:t.description,completed:t.completed,created_at:t.created_at,priority:t.priority,subject:t.subject,userUid:t.subject.userUid};a.push(e)})),t.state.loading=!1,t.commit("retrieveTodos",a)})).catch((function(e){t.state.loading=!1,console.log(e)}))},deleteTodo:function(t,e){j.a.delete(E+e).then((function(){t.commit("deleteTodo",e)})).catch((function(t){console.log(t)}))},addTodo:function(t,e){console.log(e.subject.id),j.a.post(E,{title:e.title,description:e.description,priority:e.priority,completed:!1,subject:e.subject.id,userUid:e.subject.userUid}).then((function(a){console.log(a.data),t.commit("addTodo",{id:a.data.id,title:e.title,description:e.description,priority:e.priority,completed:!1,subject:e.subject,userUid:e.subject.userUid})})).catch((function(t){console.log(t)}))},updateTodo:function(t,e){j.a.patch(E+e.id+"/",{title:e.title,description:e.description,completed:e.completed}).then((function(e){console.log(e.data),t.commit("updateTodo",e.data)})).catch((function(t){console.log(t)}))},clearCompleted:function(t,e){e.getTodos.forEach((function(t){j.a.delete(E+t.id)})).then((function(){t.commit("clearCompleted")}))},changeFilter:function(t,e){t.commit("changeFilter",e)}},$={deleteTodo:function(t,e){var a=t.todos.findIndex((function(t){return t.id==e}));t.todos.splice(a,1)},addTodo:function(t,e){t.todos.push({id:e.id,title:e.title,description:e.description,priority:e.priority,completed:e.completed,subject:e.subject})},updateTodo:function(t,e){var a=t.todos.findIndex((function(t){return t.id==e.id}));t.todos.splice(a,1,e)},clearCompleted:function(t){t.todos=t.todos.filter((function(t){return!t.completed}))},changeFilter:function(t,e){t.filter=e},retrieveTodos:function(t,e){t.todos=e}},O={state:S,getters:k,actions:T,mutations:$},N=(a("b0c0"),"https://agenda-vue-django-api.herokuapp.com/api/subjects/"),M={subjects:[],loading:!0},U={getSubjects:function(t){return t.subjects}},P={retrieveSubjects:function(t){t.state.loading=!0,j.a.get(N).then((function(e){var a=[],s=e.data.filter((function(t){return t.userUid==_.a.auth().currentUser.uid}));s.forEach((function(t){var e={id:t.id,name:t.name,schedule1:t.schedule1,schedule2:t.schedule2,color:t.color,userUid:t.userUid};a.push(e)})),t.state.loading=!1,t.commit("retrieveSubjects",a)})).catch((function(t){console.log(t)}))},addSubject:function(t,e){j.a.post(N,{name:e.name,schedule1:e.schedule1,schedule2:e.schedule2,color:e.color,userUid:_.a.auth().currentUser.uid}).then((function(e){t.commit("addSubject",{id:e.data.id,name:e.data.name,schedule1:e.data.schedule1,schedule2:e.data.schedule2,color:e.data.color,userUid:e.data.userUid})})).catch((function(t){console.log(t)}))},deleteSubject:function(t,e){j.a.delete(N+e).then((function(){t.commit("deleteSubject",e)})).catch((function(t){console.log(t)}))},updateSubject:function(t,e){var a=N+e.id+"/";j.a.put(a,{name:e.name,schedule1:e.schedule1,schedule2:e.schedule2,color:e.color}).then((function(e){t.commit("updateSubject",e.data)})).catch((function(t){console.log(t)}))}},F={retrieveSubjects:function(t,e){t.subjects=e},addSubject:function(t,e){t.subjects.push(e)},deleteSubject:function(t,e){var a=t.subjects.findIndex((function(t){return t.id==e}));t.subjects.splice(a,1)},updateSubject:function(t,e){var a=t.subjects.findIndex((function(t){return t.id==e.id}));t.subjects.splice(a,1,{id:e.id,name:e.name,schedule1:e.schedule1,schedule2:e.schedule2})}},A={state:M,getters:U,actions:P,mutations:F},D="https://agenda-vue-django-api.herokuapp.com/api/exams/",I={exams:[],loading:!0},q={getExams:function(t){return t.exams}},L={retrieveExams:function(t){t.state.loading=!0,j.a.get(D).then((function(e){var a=[],s=e.data.filter((function(t){return t.userUid==_.a.auth().currentUser.uid}));s.forEach((function(t){var e={id:t.id,date:t.date,time:t.time,grade:t.grade,subject:t.subject,typeOf:t.typeOf,userUid:t.userUid};a.push(e)})),t.state.loading=!1,t.commit("retrieveExams",a)})).catch((function(t){console.log(t)}))},addExam:function(t,e){j.a.post(D,{date:e.date,time:e.time,grade:e.grade,subject:e.subject.id,typeOf:e.typeOf,userUid:e.subject.userUid}).then((function(e){t.commit("addExam",e.data)})).catch((function(t){console.log(t.response)}))},deleteExam:function(t,e){j.a.delete(D+e).then((function(){t.commit("deleteExam",e)})).catch((function(t){console.log(t)}))},updateExam:function(t,e){j.a.patch(D+e.id+"/",{date:e.date,time:e.time,grade:e.grade,typeOf:e.typeOf}).then((function(e){t.commit("updateExam",e.data)}))}},H={retrieveExams:function(t,e){t.exams=e},addExam:function(t,e){t.exams.push(e)},deleteExam:function(t,e){var a=t.exams.findIndex((function(t){return t.id==e}));t.exams.splice(a,1)},updateExam:function(t,e){var a=t.exams.findIndex((function(t){return t.id==e.id}));t.exams.splice(a,1,e)}},B={state:I,getters:q,actions:L,mutations:H},R={user:{loggedIn:!1,data:null}},G={user:function(t){return t.user}},z={SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e},LOGOUT:function(t){t.user.data=null,t.user.loggedIn=!1}},W={fetchUser:function(t,e){var a=t.commit;a("SET_LOGGED_IN",null!==e),a("SET_USER",e?{displayName:e.displayName,email:e.email,uid:e.uid}:null)},logout:function(t){var e=t.commit;e("LOGOUT")}},J={state:R,getters:G,actions:W,mutations:z},K={getColors:function(){var t=[["#f44336","#e91e63","#9C27B0","#673AB7","#3F51B5","#2196f3","#03A9F4","#00BCD4","#009688","#4caf50","#8BC34A","#CDDC39","#ffeb3b","#FFC107","#FF9800","#FF5722","#795548","#607D8B"]];return t}},X={getters:K};s["a"].use(x["a"]);var Z=new x["a"].Store({modules:{main:X,todos:O,subjects:A,exams:B,auth:J}}),Q=(a("aede"),a("45fc"),a("8c4f")),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-8"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-content"},[t.error?a("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"email"}},[t._v("Email")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"password"}},[t._v("Password")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._m(1)])])])])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-header-title"},[t._v(" Login ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-link",attrs:{type:"submit"}},[t._v("Login")])])])}],tt={data:function(){return{form:{email:"",password:""},error:null}},methods:{submit:function(){var t=this;_.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then((function(){t.$router.replace({name:"Dashboard"})})).catch((function(e){t.error=e.message}))}}},et=tt,at=Object(m["a"])(et,V,Y,!1,null,null,null),st=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-8"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-content"},[t.error?a("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"name"}},[t._v("Name")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"input",attrs:{id:"name",type:"name",name:"name",value:"",required:"",autofocus:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"email"}},[t._v("Email")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"password"}},[t._v("Password")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._m(1)])])])])])])},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-header-title"},[t._v(" Sign Up ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("Register")])])])}],nt={data:function(){return{form:{name:"",email:"",password:""},error:null}},methods:{submit:function(){var t=this;l.a.auth().createUserWithEmailAndPassword(this.form.email,this.form.password).then((function(e){e.user.updateProfile({displayName:t.form.name}).then((function(){t.$router.replace({name:"Dashboard"})}))})).catch((function(e){t.error=e.message}))}}},rt=nt,ct=Object(m["a"])(rt,it,ot,!1,null,null,null),lt=ct.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-4"},[a("TodoList")],1),a("div",{staticClass:"column is-8"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-12"},[a("SubjectList")],1)]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-12"},[a("ExamList")],1)])])])])},ut=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"section-styled upper-section"},[a("h3",{staticClass:"title"},[t._v("Tareas")]),a("div",{staticClass:"add-todo-form"},[a("b-field",[a("b-input",{attrs:{placeholder:"Titulo"},model:{value:t.newTodo.title,callback:function(e){t.$set(t.newTodo,"title",e)},expression:"newTodo.title"}})],1),a("b-field",[a("b-input",{attrs:{placeholder:"Descripcion",maxlength:"400",type:"textarea"},model:{value:t.newTodo.description,callback:function(e){t.$set(t.newTodo,"description",e)},expression:"newTodo.description"}})],1),a("div",{staticClass:"columns todo-selects"},[a("b-field",{staticClass:"column is-6"},[a("b-select",{attrs:{placeholder:"Materia"},model:{value:t.newTodo.subject,callback:function(e){t.$set(t.newTodo,"subject",e)},expression:"newTodo.subject"}},t._l(t.getSubjects,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(" "+t._s(e.name)+" ")])})),0)],1),a("b-field",{staticClass:"column is-4"},[a("b-select",{attrs:{placeholder:"Prioridad"},model:{value:t.newTodo.priority,callback:function(e){t.$set(t.newTodo,"priority",e)},expression:"newTodo.priority"}},t._l(t.priorityNums,(function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1),a("b-button",{staticClass:"add-btn",attrs:{expanded:""},on:{click:t.addTodo}},[a("strong",[t._v("Agregar tarea")])])],1)]),a("div",{staticClass:"section-styled"},[a("TodoFiltered"),t.$store.state.todos.loading?a("div",{staticClass:"lds-facebook"},[a("div"),a("div"),a("div")]):t._e(),t._l(t.todosFiltered,(function(e){return a("TodoItem",{key:e.id,attrs:{todo:e,checkAll:!t.anyRemaining}})}))],2)])},pt=[],ft=(a("498a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card todo"},[a("div",{staticClass:"todo-header"},[a("div",{staticClass:"todo-top"},[a("SubjectTag",{attrs:{subject:t.todo.subject}}),a("div",{staticClass:"actions"},[a("b-icon",{staticClass:"pencil-icon",attrs:{icon:"pencil-outline"},nativeOn:{click:function(e){t.editMode=!t.editMode}}}),a("b-icon",{staticClass:"bin-icon",attrs:{icon:"delete"},nativeOn:{click:function(e){return t.deleteTodo(t.todo.id)}}})],1)],1),a("div",{staticClass:"todo-title",on:{click:function(e){t.showDescription=!t.showDescription}}},[t.editMode?a("div",{staticClass:"edit-mode",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEdit(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input-title-edit",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),a("b-button",{staticClass:"save-button",on:{click:function(e){return t.doneEdit()}}},[t._v("Guardar")])],1):a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input-title",attrs:{type:"text",readonly:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("PriorityTag",{attrs:{priority:t.todo.priority}})],1)]),a("hr"),a("b-collapse",{directives:[{name:"show",rawName:"v-show",value:t.showDescription,expression:"showDescription"}]},[a("div",{staticClass:"todo-item-desc"},[a("p",[t._v(t._s(t.description))])])])],1)}),bt=[],ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-icon",{attrs:{icon:"alert-circle",type:t.priorityColorCode}})},vt=[],gt=(a("a9e3"),{props:{priority:{type:Number,required:!0}},computed:{priorityColorCode:function(){return 0==this.priority?"is-success":1==this.priority?"is-warning":"is-danger"},verbosePriority:function(){return 0==this.priority?"Low":1==this.priority?"Middle":"High"}}}),Ct=gt,xt=Object(m["a"])(Ct,ht,vt,!1,null,null,null),wt=xt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-tag",{style:{color:t.subject.color}},[t._v(t._s(t.subject.name))])},yt=[],_t={props:{subject:{type:Object,required:!0}}},Et=_t,St=Object(m["a"])(Et,jt,yt,!1,null,"ac445e9e",null),kt=St.exports,Tt={props:{todo:{type:Object,required:!0},checkAll:{type:Boolean,required:!0}},components:{PriorityTag:wt,SubjectTag:kt},data:function(){return{editMode:!1,data:!1,showDescription:!1,id:this.todo.id,title:this.todo.title,description:this.todo.description,completed:this.todo.completed,priority:this.todo.priority,subject:this.todo.subject}},methods:{testing:function(){alert("this works")},deleteTodo:function(t){this.$store.dispatch("deleteTodo",t)},doneEdit:function(){if(""==this.title.trim())return alert("El titulo no puede estar vacio"),void(this.title="No puede estar vacio");this.editMode=!1,this.$store.dispatch("updateTodo",{id:this.id,title:this.title,description:this.description,completed:this.completed})}}},$t=Tt,Ot=(a("1f84"),Object(m["a"])($t,ft,bt,!1,null,"1f7ea99b",null)),Nt=Ot.exports,Mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns filters",attrs:{"no-gutters":"",justify:"center"}},[a("div",{staticClass:"column is-10"})])}],Pt={computed:{filter:function(){return this.$store.state.todos.filter}},methods:{changeFilter:function(t){this.$store.dispatch("changeFilter",t)}},data:function(){return{filters:["todas","baja","media","alta"]}}},Ft=Pt,At=(a("a655"),Object(m["a"])(Ft,Mt,Ut,!1,null,"683e0cb1",null)),Dt=At.exports,It={components:{TodoItem:Nt,TodoFiltered:Dt},created:function(){this.$store.dispatch("retrieveTodos")},data:function(){return{newTodo:{title:"",description:null,subject:null,priority:null},priorityNums:[{text:"Baja",value:0},{text:"Media",value:1},{text:"Alta",value:2}]}},computed:{todosFiltered:function(){return this.$store.getters.todosFiltered},anyRemaining:function(){return this.$store.getters.anyRemaining},getSubjects:function(){return this.$store.getters.getSubjects}},methods:{addTodo:function(){0!=this.newTodo.title.trim().length&&(this.$store.dispatch("addTodo",{title:this.newTodo.title,description:this.newTodo.description,priority:this.newTodo.priority,completed:!1,subject:this.newTodo.subject}),this.newTodo.title="",this.newTodo.description="",this.newTodo.subject=null,this.newTodo.priority=null)}}},qt=It,Lt=(a("f653"),Object(m["a"])(qt,mt,pt,!1,null,"0f1e3c74",null)),Ht=Lt.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"section-styled"},[a("div",{staticClass:"cards-header"},[a("h3",{staticClass:"title"},[t._v("Examenes")]),a("b-button",{staticClass:"add-btn",attrs:{outlined:""},on:{click:function(e){e.stopPropagation(),t.showNewExamModal=!0}}},[t._v("Agregar Examen")])],1),[t.$store.state.exams.loading?a("div",{staticClass:"lds-facebook"},[a("div"),a("div"),a("div")]):t._e(),a("b-table",{staticClass:"exams-table",attrs:{data:t.getExams},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-table-column",{attrs:{field:"subject",label:"Materia"}},[t._v(" "+t._s(e.row.subject.name)+" ")]),t._l(t.columns,(function(s){return[a("b-table-column",{key:s.field.id,attrs:{field:s.field,label:s.label}},[t._v(" "+t._s(e.row[s.field])+" ")])]})),a("b-table-column",{attrs:{centered:"",field:"actions","custom-key":"actions",label:"Acciones"}},[a("b-button",{attrs:{type:"is-text"},on:{click:function(a){return t.getExamData(e.row)}}},[a("b-icon",{attrs:{type:"is-warning",icon:"pencil",size:"is-small"}})],1),a("b-button",{attrs:{type:"is-text"},on:{click:function(a){return t.deleteExam(e.row.id)}}},[a("b-icon",{attrs:{type:"is-danger",icon:"delete",size:"is-small"}})],1)],1)]}}])})]],2),a("b-modal",{attrs:{active:t.showNewExamModal,"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-modal":""},on:{"update:active":function(e){t.showNewExamModal=e}}},[a("form",{attrs:{action:""}},[a("div",{staticClass:"modal-card",staticStyle:{width:"600px"}},[a("header",{staticClass:"modal-card-head primary-color"},[a("p",{staticClass:"modal-card-title"},[t._v("Agregar nuevo examen")])]),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-9"},[a("b-field",{attrs:{label:"Materia"}},[a("b-select",{attrs:{placeholder:"Materia"},model:{value:t.newExam.subject,callback:function(e){t.$set(t.newExam,"subject",e)},expression:"newExam.subject"}},t._l(t.getSubjects,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e.name)+" ")])})),0)],1)],1)]),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-5"},[a("b-field",{attrs:{label:"Dia"}},[a("b-input",{attrs:{type:"text",placeholder:"Fecha",required:""},model:{value:t.newExam.date,callback:function(e){t.$set(t.newExam,"date",e)},expression:"newExam.date"}})],1)],1),a("div",{staticClass:"column is-4"},[a("b-field",{attrs:{label:"Hora"}},[a("b-input",{attrs:{type:"text",placeholder:"Hora",required:""},model:{value:t.newExam.time,callback:function(e){t.$set(t.newExam,"time",e)},expression:"newExam.time"}})],1)],1)]),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-6"},[a("b-field",{attrs:{label:"Tipo de examen"}},[a("b-select",{attrs:{placeholder:"Tipo de examen"},model:{value:t.newExam.typeOf,callback:function(e){t.$set(t.newExam,"typeOf",e)},expression:"newExam.typeOf"}},t._l(t.typeOfList,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)],1)],1),a("div",{staticClass:"column is-3"},[a("b-field",{attrs:{label:"Nota"}},[a("b-input",{attrs:{type:"number",placeholder:"Nota"},model:{value:t.newExam.grade,callback:function(e){t.$set(t.newExam,"grade",e)},expression:"newExam.grade"}})],1)],1)]),a("div",{staticClass:"columns is-centered"},[a("b-button",{staticClass:"add-btn",on:{click:function(e){t.showNewExamModal=!1,t.addExam()}}},[t._v("Crear Examen")])],1)])])])]),t.editedExam.subject?a("b-modal",{attrs:{active:t.showEditModal,"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-modal":""},on:{"update:active":function(e){t.showEditModal=e}}},[a("form",{attrs:{action:""}},[a("div",{staticClass:"modal-card",staticStyle:{width:"600px"}},[a("header",{staticClass:"modal-card-head primary-color"},[a("p",{staticClass:"modal-card-title"},[t._v("Editar examen de "+t._s(t.editedExam.subject.name))])]),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-9"},[a("b-field",{attrs:{label:"Materia"}},[a("b-input",{attrs:{disabled:""},model:{value:t.editedExam.subject.name,callback:function(e){t.$set(t.editedExam.subject,"name",e)},expression:"editedExam.subject.name"}})],1)],1)]),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-9"},[a("b-field",{attrs:{label:"Fecha"}},[a("b-input",{attrs:{type:"text",placeholder:"Fecha",required:""},model:{value:t.editedExam.date,callback:function(e){t.$set(t.editedExam,"date",e)},expression:"editedExam.date"}})],1)],1)]),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-6"},[a("b-field",{attrs:{label:"Tipo de examen"}},[a("b-select",{attrs:{placeholder:"Tipo de examen"},model:{value:t.editedExam.typeOf,callback:function(e){t.$set(t.editedExam,"typeOf",e)},expression:"editedExam.typeOf"}},t._l(t.typeOfList,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)],1)],1),a("div",{staticClass:"column is-3"},[a("b-field",{attrs:{label:"Nota"}},[a("b-input",{attrs:{type:"number",placeholder:"Nota"},model:{value:t.editedExam.grade,callback:function(e){t.$set(t.editedExam,"grade",e)},expression:"editedExam.grade"}})],1)],1)]),a("div",{staticClass:"columns is-centered"},[a("b-button",{staticClass:"add-btn",on:{click:function(e){t.showEditModal=!1,t.updateExam(t.editedExam)}}},[t._v("Crear Examen")])],1)])])])]):t._e()],1)},Rt=[],Gt={data:function(){return{showEditModal:!1,showNewExamModal:!1,newExam:{date:"",time:"",subject:null,grade:0,typeOf:""},columns:[{field:"date",label:"Fecha"},{field:"time",label:"Hora"},{field:"grade",label:"Nota"},{field:"typeOf",label:"Tipo"}],editedExam:{date:"",time:"",subect:Object,grade:0,typeOf:""},typeOfList:["Parcial","Final"]}},created:function(){this.$store.dispatch("retrieveExams")},computed:{getExams:function(){return this.$store.getters.getExams},getSubjects:function(){return this.$store.getters.getSubjects}},methods:{addExam:function(){this.$store.dispatch("addExam",this.newExam)},deleteExam:function(t){this.$store.dispatch("deleteExam",t)},updateExam:function(t){this.$store.dispatch("updateExam",t)},getExamData:function(t){this.editedExam=t,this.showEditModal=!0}}},zt=Gt,Wt=(a("79be"),Object(m["a"])(zt,Bt,Rt,!1,null,"66436842",null)),Jt=Wt.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"section-styled upper-section"},[a("div",{staticClass:"cards-header"},[a("h3",{staticClass:"title"},[t._v("Materias")]),a("b-button",{staticClass:"add-btn",attrs:{outlined:""},on:{click:function(e){e.stopPropagation(),t.showNewSubjectModal=!0}}},[t._v("Agregar Materia")])],1),a("div",{staticClass:"subjects-list"},[t.$store.state.exams.loading?a("div",{staticClass:"lds-facebook"},[a("div"),a("div"),a("div")]):t._e(),t._l(t.getSubjects,(function(t){return a("SubjectItem",{key:t.id,attrs:{subject:t}})}))],2)]),a("b-modal",{attrs:{active:t.showNewSubjectModal,"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-modal":""},on:{"update:active":function(e){t.showNewSubjectModal=e}}},[a("form",{attrs:{action:""}},[a("div",{staticClass:"modal-card",staticStyle:{width:"600px"}},[a("header",{staticClass:"modal-card-head primary-color"},[a("p",{staticClass:"modal-card-title"},[t._v("Agregar nueva materia")])]),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-10"},[a("b-field",{attrs:{label:"Nombre"}},[a("b-input",{attrs:{type:"text",placeholder:"Nombre de la materia",required:""},model:{value:t.newSubject.name,callback:function(e){t.$set(t.newSubject,"name",e)},expression:"newSubject.name"}})],1)],1)]),a("div",{staticClass:"columns horarios"},[a("div",{staticClass:"column is-4"},[a("b-field",{attrs:{label:"Horario 1"}},[a("b-input",{attrs:{type:"text",placeholder:"Horario"},model:{value:t.newSubject.schedule1,callback:function(e){t.$set(t.newSubject,"schedule1",e)},expression:"newSubject.schedule1"}})],1)],1),a("div",{staticClass:"column is-4"},[a("b-field",{attrs:{label:"Horario 2"}},[a("b-input",{attrs:{type:"text",placeholder:"Horario"},model:{value:t.newSubject.schedule2,callback:function(e){t.$set(t.newSubject,"schedule2",e)},expression:"newSubject.schedule2"}})],1)],1)]),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-10"},[a("b-field",{attrs:{label:"Elegi un color:"}},[a("swatches",{staticClass:"swatch",attrs:{colors:t.getColors,inline:""},model:{value:t.newSubject.color,callback:function(e){t.$set(t.newSubject,"color",e)},expression:"newSubject.color"}})],1)],1)]),a("div",{staticClass:"columns is-centered"},[a("b-button",{staticClass:"add-btn",on:{click:function(e){t.showNewSubjectModal=!1,t.addSubject()}}},[t._v("Crear Examen")])],1)])])])])],1)},Xt=[],Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card subject-item",style:{background:t.color}},[a("div",{staticClass:"card-header"},[a("span",{staticClass:"card-header-title name subject-header"},[t._v(" "+t._s(t.name)+" "),a("b-dropdown",{attrs:{"aria-role":"list"}},[a("b-icon",{staticClass:"acciones",attrs:{slot:"trigger",icon:"dots-horizontal-circle"},slot:"trigger"}),a("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){t.showEditModal=!0}}},[t._v("Editar")]),a("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){return t.deleteSubject(t.subject.id)}}},[t._v("Eliminar")])],1)],1)]),a("hr"),a("div",{staticClass:"card-content card-text"},[a("div",{staticClass:"schedule"},[a("p",{staticClass:"schedule-title"},[t._v("Horario")]),a("p",[t._v(t._s(t.schedule1))]),a("p",[t._v(t._s(t.schedule2))])])]),a("b-modal",{staticClass:"edit-modal",attrs:{active:t.showEditModal,"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-modal":""},on:{"update:active":function(e){t.showEditModal=e}}},[a("form",{attrs:{action:""}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head primary-color"},[a("p",{staticClass:"modal-card-title"},[t._v("Editar "+t._s(t.name))])]),a("section",{staticClass:"modal-card-body"},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-10"},[a("b-field",{attrs:{label:"Nombre"}},[a("b-input",{attrs:{type:"text",placeholder:"Nombre de la materia",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1)]),a("div",{staticClass:"columns horarios"},[a("div",{staticClass:"column is-4"},[a("b-field",{attrs:{label:"Horario 1"}},[a("b-input",{attrs:{type:"text",placeholder:"Horario"},model:{value:t.schedule1,callback:function(e){t.schedule1=e},expression:"schedule1"}})],1)],1),a("div",{staticClass:"column is-4"},[a("b-field",{attrs:{label:"Horario 2"}},[a("b-input",{attrs:{type:"text",placeholder:"Horario"},model:{value:t.schedule2,callback:function(e){t.schedule2=e},expression:"schedule2"}})],1)],1)]),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-10"},[a("b-field",{attrs:{label:"Elegi un color:"}},[a("swatches",{staticClass:"swatch",attrs:{colors:t.getColors,inline:""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1)]),a("div",{staticClass:"columns is-centered"},[a("b-button",{staticClass:"add-btn",on:{click:function(e){t.showEditModal=!1,t.updateSubject()}}},[t._v("Guardar cambios")])],1)])])])])],1)},Qt=[],Vt=a("7f75"),Yt=a.n(Vt),te={components:{Swatches:Yt.a},props:{subject:{type:Object,required:!0}},data:function(){return{id:this.subject.id,name:this.subject.name,schedule1:this.subject.schedule1,schedule2:this.subject.schedule2,color:this.subject.color,showEditModal:!1}},computed:{getColors:function(){return this.$store.getters.getColors}},methods:{deleteSubject:function(t){console.log(t),this.$store.dispatch("deleteSubject",t)},updateSubject:function(){this.$store.dispatch("updateSubject",{id:this.id,name:this.name,schedule1:this.schedule1,schedule2:this.schedule2,color:this.color})}}},ee=te,ae=(a("abad"),Object(m["a"])(ee,Zt,Qt,!1,null,"ba23b060",null)),se=ae.exports,ie={data:function(){return{showNewSubjectModal:!1,newSubject:{id:0,name:"",schedule1:"",schedule2:"",color:"#ffeb3b"},rules:[function(t){return!!t||"Required"}]}},components:{SubjectItem:se,Swatches:Yt.a},created:function(){this.$store.dispatch("retrieveSubjects")},computed:{getSubjects:function(){return this.$store.getters.getSubjects},getColors:function(){return this.$store.getters.getColors}},methods:{addSubject:function(){if(0!=this.newSubject.name.trim().length){var t={id:this.newSubject.id,name:this.newSubject.name,schedule1:this.newSubject.schedule1,schedule2:this.newSubject.schedule2,color:this.newSubject.color};0==t.schedule1.trim().length&&(t.schedule1="No first schedule"),0==t.schedule2.trim().length&&(t.schedule2="No second schedule"),this.$store.dispatch("addSubject",t),this.newSubject.id++,this.newSubject.name="",this.newSubject.schedule1="",this.newSubject.schedule2="",this.newSubject.color="#ffeb3b"}else this.dialog=!0}}},oe=ie,ne=(a("a515"),Object(m["a"])(oe,Kt,Xt,!1,null,"b5c50792",null)),re=ne.exports,ce={components:{TodoList:Ht,ExamList:Jt,SubjectList:re}},le=ce,de=(a("2fe3"),Object(m["a"])(le,dt,ut,!1,null,null,null)),ue=de.exports;s["a"].use(Q["a"]);var me=new Q["a"]({mode:"history",base:"/College-Agenda/",routes:[{path:"/login",name:"Login",component:st},{path:"/register",name:"Register",component:lt},{path:"/dashboard",name:"Dashboard",component:ue,meta:{requiresAuth:!0}}]});me.beforeEach((function(t,e,a){var s=t.matched.some((function(t){return t.meta.requiresAuth}));s?_.a.auth().onAuthStateChanged((function(t){t?(Z.dispatch("fetchUser",t),a()):a("/login")})):a()}));var pe=me;s["a"].config.productionTip=!1;var fe={apiKey:"AIzaSyBU4Ej79r6XFc7_RfTrkm48BWAzqES-yZk",authDomain:"todo-app-8bfd0.firebaseapp.com",databaseURL:"https://todo-app-8bfd0.firebaseio.com",projectId:"todo-app-8bfd0",storageBucket:"todo-app-8bfd0.appspot.com",messagingSenderId:"794391387546",appId:"1:794391387546:web:5f4694544a6c72cb096e23"};y["initializeApp"](fe),new s["a"]({router:pe,buefy:void 0,store:Z,render:function(t){return t(g)}}).$mount("#app")},"5a24":function(t,e,a){},"75f5":function(t,e,a){},"79be":function(t,e,a){"use strict";var s=a("1b7e"),i=a.n(s);i.a},a515:function(t,e,a){"use strict";var s=a("eb12"),i=a.n(s);i.a},a655:function(t,e,a){"use strict";var s=a("75f5"),i=a.n(s);i.a},abad:function(t,e,a){"use strict";var s=a("4afd"),i=a.n(s);i.a},aede:function(t,e,a){},d1be:function(t,e,a){"use strict";var s=a("2582"),i=a.n(s);i.a},eb12:function(t,e,a){},f653:function(t,e,a){"use strict";var s=a("5a24"),i=a.n(s);i.a}});
//# sourceMappingURL=app.9035754f.js.map