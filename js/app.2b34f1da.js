(function(e){function t(t){for(var n,a,c=t[0],l=t[1],i=t[2],u=0,p=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,c=1;c<s.length;c++){var l=s[c];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var d=l;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),r={class:"generator"},o={class:"container w-full h-full fixed top-0 left-0 flex items-center justify-center content-center overflow-auto"},a={style:{border:"1px solid hsla(0, 0%, 88%, 0.2)"},class:"lg:w-4/12 md:w-6/12 rounded-xl bg-gray-100 px-5"},c=Object(n["d"])("h1",{class:"text-center text-2xl font-bold my-4"},"Password generator",-1),l=Object(n["d"])("hr",null,null,-1),i={class:"my-4"},d=Object(n["d"])("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"password"}," Your password ",-1),u=["value"],p=Object(n["d"])("hr",null,null,-1),b={class:"my-4"},f={class:"flex justify-between items-center text-gray-500 font-bold my-2"},h=Object(n["d"])("span",{class:"text-sm"},"Password length",-1),g={class:"flex justify-between items-center text-gray-500 font-bold my-2"},y=Object(n["d"])("span",{class:"text-sm"},"Include uppercase letters",-1),m={class:"flex justify-between items-center text-gray-500 font-bold my-2"},w=Object(n["d"])("span",{class:"text-sm"},"Include lowercase letters",-1),j={class:"flex justify-between items-center text-gray-500 font-bold my-2"},O=Object(n["d"])("span",{class:"text-sm"},"Include numbers",-1),x={class:"flex justify-between items-center text-gray-500 font-bold my-2"},v=Object(n["d"])("span",{class:"text-sm"},"Include symbols",-1),P=Object(n["d"])("hr",null,null,-1),L={class:"flex items-center justify-between my-4 md:static relative"},k=["disabled"],C=Object(n["e"])(" Generate   "),M=Object(n["d"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"key",class:"svg-inline--fa fa-key fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{height:"14px"}},[Object(n["d"])("path",{fill:"currentColor",d:"M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"})],-1),V=[C,M],I={key:0,style:{bottom:"-50px",left:"0"},class:"text-green-700 bg-green-200 rounded-lg py-1 px-2 md:static absolute right-0 text-center"},z=Object(n["e"])(" Copy   "),A=Object(n["d"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"copy",class:"svg-inline--fa fa-copy fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",style:{height:"14px"}},[Object(n["d"])("path",{fill:"currentColor",d:"M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"})],-1),B=[z,A];function H(e,t,s,C,M,z){return Object(n["g"])(),Object(n["c"])("main",r,[Object(n["d"])("div",o,[Object(n["d"])("div",a,[c,l,Object(n["d"])("div",i,[d,Object(n["d"])("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"text",placeholder:"Password",value:M.password,disabled:""},null,8,u)]),p,Object(n["d"])("div",b,[Object(n["d"])("label",f,[h,Object(n["j"])(Object(n["d"])("input",{class:"mr-2 leading-tight w-20 px-1",type:"number","onUpdate:modelValue":t[0]||(t[0]=function(e){return M.options.passwordLength=e})},null,512),[[n["i"],M.options.passwordLength,void 0,{number:!0}]])]),Object(n["d"])("label",g,[y,Object(n["j"])(Object(n["d"])("input",{class:"mr-2 leading-tight",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(e){return M.options.uppercaseLetters=e})},null,512),[[n["h"],M.options.uppercaseLetters]])]),Object(n["d"])("label",m,[w,Object(n["j"])(Object(n["d"])("input",{class:"mr-2 leading-tight",type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return M.options.lowercaseLetters=e})},null,512),[[n["h"],M.options.lowercaseLetters]])]),Object(n["d"])("label",j,[O,Object(n["j"])(Object(n["d"])("input",{class:"mr-2 leading-tight",type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(e){return M.options.numbers=e})},null,512),[[n["h"],M.options.numbers]])]),Object(n["d"])("label",x,[v,Object(n["j"])(Object(n["d"])("input",{class:"mr-2 leading-tight",type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=function(e){return M.options.symbols=e})},null,512),[[n["h"],M.options.symbols]])])]),P,Object(n["d"])("div",L,[Object(n["d"])("button",{class:Object(n["f"])(["bg-white border-gray-500 text-gray-500 font-bold py-2 px-4 rounded flex items-center",{"bg-gray-200":z.smallOrBigLength}]),type:"button",onClick:t[5]||(t[5]=function(){return z.getPassword&&z.getPassword.apply(z,arguments)}),disabled:z.smallOrBigLength},V,10,k),M.successCopy?(Object(n["g"])(),Object(n["c"])("p",I," Text Coppied! ")):Object(n["b"])("",!0),Object(n["d"])("button",{class:"bg-white border-gray-500 text-gray-500 font-bold py-2 px-4 rounded flex items-center",type:"button",onClick:t[6]||(t[6]=function(){return z.copyPassword&&z.copyPassword.apply(z,arguments)})},B)])])])])}var S=s("2909"),T=(s("a630"),s("3ca3"),s("d3b7"),s("07ac"),s("99af"),{name:"App",data:function(){return{options:{passwordLength:0,uppercaseLetters:!1,lowercaseLetters:!1,numbers:!1,symbols:!1},password:"",words:[],successCopy:!1}},computed:{smallOrBigLength:function(){return this.options.passwordLength<=2||this.options.passwordLength>30}},methods:{getPassword:function(){var e={uppercaseLetters:Array.from("QWERTYUIOPASDFGHJKLZXCVBNM"),lowercaseLetters:Array.from("qwertyuiopasdfghjklzxcvbnm"),numbers:[0,1,2,3,4,5,6,7,8,9],symbols:Array.from("<?>/!@#$%&*()-=~")};if(this.words=[],Object.values(this.options).some((function(e){return 1==e}))){for(var t in this.options)for(var s in e)1==this.options[t]&&t==s&&(this.words=[].concat(Object(S["a"])(this.words),Object(S["a"])(e[s])));this.password=this.generatePassword(this.words)}},generatePassword:function(e){for(var t="",s=0;s<this.options.passwordLength;s++)t+=e[this.getRandomInRange(0,e.length-1)];return t},getRandomInRange:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},copyPassword:function(){var e=this,t=document.getElementById("password");""!=t.value&&(navigator.clipboard.writeText(t.value),this.successCopy=!0,setTimeout((function(){e.successCopy=!1}),2e3))}}}),U=s("6b0d"),_=s.n(U);const R=_()(T,[["render",H]]);var J=R;s("ba8c");Object(n["a"])(J).mount("#app")},ba8c:function(e,t,s){}});
//# sourceMappingURL=app.2b34f1da.js.map