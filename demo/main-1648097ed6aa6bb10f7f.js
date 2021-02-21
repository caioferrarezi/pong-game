(()=>{"use strict";var t={64:(t,e,i)=>{i.d(e,{Z:()=>c});var n=i(645),r=i.n(n),o=i(667),s=i.n(o),a=i(777),h=r()((function(t){return t[1]})),l=s()(a);h.push([t.id,"@font-face {\n  font-family: 'RetroGaming';\n  src: url("+l+");\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #222222;\n  box-sizing: border-box;\n  font-family: 'RetroGaming';\n}\n\ncanvas {\n  display: block;\n  width: auto;\n  height: 90%;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: -webkit-crisp-edges;\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n}\n",""]);const c=h},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var a=0;a<t.length;a++){var h=[].concat(t[a]);n&&r[h[0]]||(i&&(h[2]?h[2]="".concat(i," and ").concat(h[2]):h[2]=i),e.push(h))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},786:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"2aa611118682daf6c9c5549a2c5548c5.wav"},56:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"7133284ea58564aa2f5ff9e8d1a6bce6.wav"},694:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"f3ad16a8380c1d1998a45af7a42c16bb.wav"},379:(t,e,i)=>{var n,r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),o=[];function s(t){for(var e=-1,i=0;i<o.length;i++)if(o[i].identifier===t){e=i;break}return e}function a(t,e){for(var i={},n=[],r=0;r<t.length;r++){var a=t[r],h=e.base?a[0]+e.base:a[0],l=i[h]||0,c="".concat(h," ").concat(l);i[h]=l+1;var d=s(c),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(o[d].references++,o[d].updater(u)):o.push({identifier:c,updater:y(u,e),references:1}),n.push(c)}return n}function h(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var s=r(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,c=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=c(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function u(t,e,i){var n=i.css,r=i.media,o=i.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,f=0;function y(t,e){var i,n,r;if(e.singleton){var o=f++;i=p||(p=h(e)),n=d.bind(null,i,o,!1),r=d.bind(null,i,o,!0)}else i=h(e),n=u.bind(null,i,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var i=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var r=s(i[n]);o[r].references--}for(var h=a(t,e),l=0;l<i.length;l++){var c=s(i[l]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}i=h}}}},777:(t,e,i)=>{t.exports=i.p+"ed67d9fa50d78d4e9598.ttf"}},e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{const t=function(){function t(){this.keysDown={}}return t.prototype.add=function(t){this.keysDown[t]=!0},t.prototype.remove=function(t){delete this.keysDown[t]},t.prototype.isDown=function(t){return!!this.keysDown[t]},t}(),e=function(){function t(t,e){this.width=t,this.height=e,this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,document.body.insertAdjacentElement("afterbegin",this.canvas)}return t.prototype.getContext=function(){return this.context=this.canvas.getContext("2d"),this.context},t}(),n=function(){function i(i,n){this.elapsedTime=0,this.oldTimestamp=0,this.keyboard=new t,this.canvas=new e(i,n),this.context=this.canvas.getContext(),this.setup(),this.setupListeners(),requestAnimationFrame(this.loop.bind(this))}return i.prototype.setupListeners=function(){var t=this;document.addEventListener("keypress",(function(e){return t.onKeyPress(e.code)})),document.addEventListener("keydown",(function(e){return t.keyboard.add(e.code)})),document.addEventListener("keyup",(function(e){return t.keyboard.remove(e.code)}))},i.prototype.loop=function(t){this.elapsedTime=(t-this.oldTimestamp)/1e3,this.oldTimestamp=t,this.update(+this.elapsedTime.toFixed(3)),this.render(),requestAnimationFrame(this.loop.bind(this))},i}();var r=432;const o=function(){function t(t,e,i,n){void 0===i&&(i=10),void 0===n&&(n=40),this.x=t,this.y=e,this.dy=0,this.width=i,this.height=n}return t.prototype.update=function(t){this.dy<0?this.y=Math.max(Math.floor(this.y+this.dy*t),0):this.y=Math.min(Math.floor(this.y+this.dy*t),r-this.height)},t.prototype.render=function(t){t.fillStyle="#ffffff",t.fillRect(this.x,this.y,this.width,this.height)},t}(),s=function(){function t(t,e){this.x=t,this.y=e,this.dx=0,this.dy=0,this.width=10,this.height=10}return t.prototype.collides=function(t){return!(this.x+this.width<t.x||t.x+t.width<this.x||this.y+this.height<t.y||t.y+t.height<this.y)},t.prototype.update=function(t){this.x+=Math.floor(this.dx*t),this.y+=Math.floor(this.dy*t)},t.prototype.render=function(t){t.fillStyle="#ffffff",t.fillRect(this.x,this.y,this.width,this.height)},t}();var a,h=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),l=i(56).Z,c=i(786).Z,d=i(694).Z;const u=function(t){function e(){return t.call(this,768,r)||this}return h(e,t),e.prototype.reset=function(){this.ball=new s(379,211),this.ball.dx=1===this.servingPlayer?250:-250,this.ball.dy=Math.floor(240*Math.random()+10)},e.prototype.onKeyPress=function(t){"Enter"!==t&&"Space"!==t||"serve"===this.state&&(this.state="play")},e.prototype.setup=function(){this.state="serve",this.servingPlayer=Math.floor(2*Math.random()+1),this.ball=new s(379,211),this.player1=new o(20,196),this.player2=new o(738,196),this.player1Score=0,this.player2Score=0,this.ball.dx=1===this.servingPlayer?250:-250,this.ball.dy=Math.floor(150*Math.random()+100),this.scoreSound=new Audio(l),this.paddleHitSound=new Audio(c),this.wallHitSound=new Audio(d),this.scoreSound.volume=.3,this.paddleHitSound.volume=.4,this.wallHitSound.volume=.4},e.prototype.update=function(t){if(this.keyboard.isDown("KeyW")?this.player1.dy=-300:this.keyboard.isDown("KeyS")?this.player1.dy=300:this.player1.dy=0,this.keyboard.isDown("ArrowUp")?this.player2.dy=-300:this.keyboard.isDown("ArrowDown")?this.player2.dy=300:this.player2.dy=0,"play"===this.state){if(this.ball.collides(this.player1)?(this.ball.x=this.player1.x+this.player1.width,this.ball.dx=1.03*-this.ball.dx,this.ball.dy<0?this.ball.dy=-Math.floor(150*Math.random()+100):this.ball.dy=Math.floor(150*Math.random()+100),this.paddleHitSound.play()):this.ball.collides(this.player2)&&(this.ball.x=this.player2.x-this.ball.width,this.ball.dx=1.03*-this.ball.dx,this.ball.dy<0?this.ball.dy=-Math.floor(150*Math.random()+100):this.ball.dy=Math.floor(150*Math.random()+100),this.paddleHitSound.play()),this.ball.y<=0?(this.ball.y=0,this.ball.dy=-this.ball.dy,this.wallHitSound.play()):this.ball.y+this.ball.height>=r&&(this.ball.y=r-this.ball.height-1,this.ball.dy=-this.ball.dy,this.wallHitSound.play()),this.ball.x+this.ball.width<0)return this.servingPlayer=2,this.player2Score+=1,this.state="serve",this.reset(),void this.scoreSound.play();if(this.ball.x>768)return this.servingPlayer=1,this.player1Score+=1,this.state="serve",this.reset(),void this.scoreSound.play();this.ball.update(t)}this.player1.update(t),this.player2.update(t)},e.prototype.render=function(){this.context.fillStyle="#282d34",this.context.fillRect(0,0,768,r),this.context.fillStyle="#ffffff",this.context.textAlign="center",this.context.textBaseline="middle","serve"===this.state&&(this.context.font="32px RetroGaming",this.context.fillText("Player "+this.servingPlayer+"'s serving",384,48),this.context.font="16px RetroGaming",this.context.fillText("Press [space] or [enter] to play",384,80)),this.context.textAlign="center",this.context.textBaseline="bottom",this.context.font="64px RetroGaming",this.context.fillText(this.player1Score.toString(),320,201),this.context.fillText(this.player2Score.toString(),448,201),this.ball.render(this.context),this.player1.render(this.context),this.player2.render(this.context)},e}(n);var p=i(379),f=i.n(p),y=i(64);f()(y.Z,{insert:"head",singleton:!1}),y.Z.locals,new u})()})();