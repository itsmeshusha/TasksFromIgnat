(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{12:function(e,t,a){e.exports={greeting:"Greeting_greeting__3Amds",someClass:"Greeting_someClass__1JP_r",error:"Greeting_error__1IlbN"}},14:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__3sfsi",errorInput:"SuperInputText_errorInput__WIhT2",error:"SuperInputText_error__3IkiQ"}},16:function(e,t,a){e.exports={default:"SuperButton_default__3iXQi",red:"SuperButton_red__3SQ1J"}},17:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2aEpI",spanClassName:"SuperCheckbox_spanClassName__1o_TL"}},23:function(e,t,a){e.exports={App:"App_App__dMox8",hw3:"App_hw3__2Nlrh"}},24:function(e,t,a){e.exports={blue:"HW4_blue__1VQp-",column:"HW4_column__1TCPv"}},28:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=(a(33),a(23)),s=a.n(o);var u=function(){return r.a.createElement("div",null)},i=a(25),m=a(1);var d=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},E=a(8),p=a.n(E);var f=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("img",{className:p.a.ava,src:e.avatar,alt:"ava"}),r.a.createElement("div",{className:p.a.name},e.name),r.a.createElement("div",{className:p.a.triangle}),r.a.createElement("div",{className:p.a.text},e.message),r.a.createElement("div",{className:p.a.time},e.time))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Artem",g="npm start \u043f\u0440\u043e\u0431\u043e\u0432\u0430\u043b?",v="20:00";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(f,{avatar:h,name:_,message:g,time:v}))},C=a(5);var k=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var N=function(e){var t=e.data.map((function(t){return r.a.createElement(k,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(x),t=Object(C.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(C.a)(c,2),s=o[0],u=o[1],i=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(a,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=a(27),w=a(12),y=a.n(w),S=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?y.a.error:y.a.someClass;return r.a.createElement("div",{className:y.a.greeting},r.a.createElement("input",{value:t,onChange:a,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n,className:y.a.button},"add"),r.a.createElement("span",null,c))},A=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(C.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(""),i=Object(C.a)(u,2),m=i[0],d=i[1],E=t.length;return r.a.createElement(S,{name:o,setNameCallback:function(e){s(e.currentTarget.value),d("")},addUser:function(){o.trim()?(a(o),alert("Hello ".concat(o," !")),s("")):d("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!")},error:m,totalUsers:E})},I=a(41);var T=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,"Homeworks 3",r.a.createElement(A,{users:a,addUserCallback:function(e){var t={_id:Object(I.a)(),name:e};l([t].concat(Object(O.a)(a)))}}))},M=a(9),B=a(14),F=a.n(B),P=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),s=e.setError,u=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","setError"]),i="".concat(F.a.error," ").concat(o||""),m=c?F.a.errorInput:F.a.superInput;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value),s("")},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},u)),c&&r.a.createElement("span",{className:i},c))},U=a(24),W=a.n(U),H=a(16),J=a.n(H),G=function(e){var t=e.red,a=e.className,n=Object(M.a)(e,["red","className"]),l="".concat(t?J.a.red:J.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},Q=a(17),X=a.n(Q),K=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(X.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:X.a.spanClassName},l))};var D=function(){var e=Object(n.useState)(""),t=Object(C.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(C.a)(c,2),s=o[0],u=o[1],i=function(){u(a?"":"error"),s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(a),l(""))},m=Object(n.useState)(!1),d=Object(C.a)(m,2),E=d[0],p=d[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:W.a.column},r.a.createElement(P,{setError:u,value:a,onChangeText:l,onEnter:i,error:s}),r.a.createElement(G,{red:!0,onClick:i},"delete "),r.a.createElement(K,{checked:E,onChangeChecked:p},"some text "),r.a.createElement(K,{checked:E,onChangeChecked:p,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var L=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(T,null),r.a.createElement(D,null))},R="/pre-junior";var Z=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:R})}}),r.a.createElement(m.b,{path:R,render:function(){return r.a.createElement(L,null)}}),r.a.createElement(m.b,{render:function(){return r.a.createElement(d,null)}}))))};var q=function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(Z,null))};var V=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"React homeworks:"),r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={message:"Message_message__1NDlu",ava:"Message_ava__3gm1U",name:"Message_name__5i6Bs",text:"Message_text__1DAiX",time:"Message_time__1ZAhB",triangle:"Message_triangle__30lf1"}}},[[28,1,2]]]);
//# sourceMappingURL=main.9e277b45.chunk.js.map