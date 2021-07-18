(function () {
  !(function () {
    function deepCss(e, t) {
      if (!e || !e.style) return "";
      const r = t.replace(/\-([a-z])/g, function (_e, t) {
        return t.toUpperCase();
      });
      if (e.currentStyle) return e.style[r] || e.currentStyle[r] || "";
      const i = document.defaultView || window;
      return e.style[r] || i.getComputedStyle(e, "").getPropertyValue(t) || "";
    }

    function getBackgroundImages() {
      var e,
        t = [],
        r = document.getElementsByTagName("*");
      for (r = t.slice.call(r, 0, r.length); r.length; )
        (e = deepCss(r.shift(), "background-image")),
          e && (e = /url\(['"]?([^")]+)/.exec(e) || []),
          (e = e[1]),
          e && -1 == t.indexOf(e) && t.push(e);
      return t;
    }

    const urls = Array.from(document.images).map((image) => {
      const url =
        null != image.getAttribute("data-original")
          ? image.getAttribute("data-original")
          : image.getAttribute("src");
      if (image.getAttribute("srcset")) {
        const srcSetUrls = image.getAttribute("srcset").split(",");
        const lastUrl = srcSetUrls[srcSetUrls.length - 1].trim().split(" ")[0];
        return (
          "<a href=" +
          lastUrl +
          "><img title=" +
          lastUrl +
          ' src="' +
          lastUrl +
          '" /></a>'
        );
      } else if (url) {
        return (
          "<a href=" + url + "><img title=" + url + ' src="' + url + '" /></a>'
        );
      }
    });

    document.write(
      "<head><title>All Images</title></head><body class='gallery'></body>"
    );

    if (urls.length > 0) {
      newWindow.document.write("<p>HTML tag images</p><br>");
      newWindow.document.write(urls.join(""));
    } else {
      newWindow.document.write("<br>No img tags");
    }
    newWindow.document.write(
      "<style>.img{display:inline-block} p{padding: 20px; color: #BBB; text-align: center; background: whitesmoke; font-family: arial,sans; font-size: 20px; border-radius: 3px; box-shadow: 0 1px 4px rgba(0,0,0,0.1);}img{margin: 20px;display: inline-block;max-height: 400px;box-shadow: 0 0 5px grey;border: 1px solid grey;padding: 1px;} .img:focus img, img:hover{background-color: #eee;background-image: linear-gradient(45deg, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%, #ddd), linear-gradient(45deg, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%, #ddd);background-size:20px 20px;background-position:0 0, 10px 10px;} .img:focus img{ padding:0; position:fixed; top:50%; left:50%; outline:2000px solid rgba(0,0,0,0.8); transform:translateX(-50%) translateY(-50%); max-height:100%; max-width:100%} .close{display:none;} .img:focus .close{padding:10px; font-size:24px; transform:rotate(45deg); display:block; position:fixed; top:5%; right:5%; color:white; z-index:9999; cursor:pointer}</style><br><p>CSS background images</p><br>"
    );
    newWindow.document.write(
      getBackgroundImages()
        .map(
          (url) =>
            "<a href=" +
            url +
            "><img title=" +
            url +
            ' src="' +
            url +
            '" /></a>'
        )
        .join("")
    );
    newWindow.document.write(
      '<style>#baguetteBox-overlay{display:none;opacity:0;position:fixed;overflow:hidden;top:0;left:0;width:100%;height:100%;z-index:1000000;background-color:#222;background-color:rgba(0,0,0,.8);transition:opacity .5s ease}#baguetteBox-overlay.visible{opacity:1}#baguetteBox-overlay .full-image{display:inline-block;position:relative;width:100%;height:100%;text-align:center}#baguetteBox-overlay .full-image figure{display:inline;margin:0;height:100%}#baguetteBox-overlay .full-image img{display:inline-block;width:auto;height:auto;max-height:100%;max-width:100%;vertical-align:middle;-moz-box-shadow:0 0 8px rgba(0,0,0,.6);box-shadow:0 0 8px rgba(0,0,0,.6)}#baguetteBox-overlay .full-image figcaption{display:block;position:absolute;bottom:0;width:100%;text-align:center;line-height:1.8;white-space:normal;color:#ccc;background-color:#000;background-color:rgba(0,0,0,.6);font-family:sans-serif}#baguetteBox-overlay .full-image:before{content:"";display:inline-block;height:50%;width:1px;margin-right:-1px}#baguetteBox-slider{position:absolute;left:0;top:0;height:100%;width:100%;white-space:nowrap;transition:left .4s ease,-webkit-transform .4s ease;transition:left .4s ease,-moz-transform .4s ease;transition:left .4s ease,transform .4s ease}#baguetteBox-slider.bounce-from-right{-webkit-animation:bounceFromRight .4s ease-out;animation:bounceFromRight .4s ease-out}#baguetteBox-slider.bounce-from-left{-webkit-animation:bounceFromLeft .4s ease-out;animation:bounceFromLeft .4s ease-out}.baguetteBox-button#next-button,.baguetteBox-button#previous-button{top:50%;top:calc(50% - 30px);width:44px;height:60px}.baguetteBox-button{position:absolute;cursor:pointer;outline:0;padding:0;margin:0;border:0;-moz-border-radius:15%;border-radius:15%;background-color:#323232;background-color:rgba(50,50,50,.5);color:#ddd;font:1.6em sans-serif;transition:background-color .4s ease}.baguetteBox-button:hover{background-color:rgba(50,50,50,.9)}.baguetteBox-button#next-button{right:2%}.baguetteBox-button#previous-button{left:2%}.baguetteBox-button#close-button{top:20px;right:2%;right:calc(2% + 6px);width:30px;height:30px}.baguetteBox-button svg{position:absolute;left:0;top:0}.spinner{width:40px;height:40px;display:inline-block;position:absolute;top:50%;left:50%;margin-top:-20px;margin-left:-20px}.double-bounce1,.double-bounce2{width:100%;height:100%;-moz-border-radius:50%;border-radius:50%;background-color:#fff;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}.double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounceFromRight{0%,100%{margin-left:0}50%{margin-left:-30px}}@keyframes bounceFromRight{0%,100%{margin-left:0}50%{margin-left:-30px}}@-webkit-keyframes bounceFromLeft{0%,100%{margin-left:0}50%{margin-left:30px}}@keyframes bounceFromLeft{0%,100%{margin-left:0}50%{margin-left:30px}}@-webkit-keyframes bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce{0%,100%{-webkit-transform:scale(0);-moz-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}}</style>'
    );
    newWindow.document.write(
      '<script>!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.baguetteBox=t()}(this,function(){function e(e,n){D.transforms=m(),D.svg=v(),o(),t(e,n)}function t(e,t){R=document.querySelectorAll(e),[].forEach.call(R,function(e){t&&t.filter&&(O=t.filter);var n=e.getElementsByTagName("a");n=[].filter.call(n,function(e){return O.test(e.href)});var o=V.length;V.push(n),V[o].options=t,[].forEach.call(V[o],function(e,t){var n=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,s(o),c(t)};U[e]=n,k(e,"click",n)})})}function n(){[].forEach.call(R,function(){var e=V.length-1;[].forEach.call(V[e],function(e){w(e,"click",U[e])}),V.pop()})}function o(){return(N=C("baguetteBox-overlay"))?(x=C("baguetteBox-slider"),B=C("previous-button"),I=C("next-button"),L=C("close-button"),void 0):(N=E("div"),N.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(N),x=E("div"),x.id="baguetteBox-slider",N.appendChild(x),B=E("button"),B.id="previous-button",B.innerHTML=D.svg?H:"&lt;",N.appendChild(B),I=E("button"),I.id="next-button",I.innerHTML=D.svg?M:"&gt;",N.appendChild(I),L=E("button"),L.id="close-button",L.innerHTML=D.svg?S:"X",N.appendChild(L),B.className=I.className=L.className="baguetteBox-button",a(),void 0)}function i(e){switch(e.keyCode){case 37:p();break;case 39:g();break;case 27:u()}}function a(){k(N,"click",W),k(B,"click",z),k(I,"click",J),k(L,"click",K),k(N,"touchstart",Q),k(N,"touchmove",Y),k(N,"touchend",Z)}function r(){w(N,"click",W),w(B,"click",z),w(I,"click",J),w(L,"click",K),w(N,"touchstart",Q),w(N,"touchmove",Y),w(N,"touchend",Z)}function s(e){if(q!==e){for(q=e,l(V[e].options);x.firstChild;)x.removeChild(x.firstChild);F.length=0;for(var t,n=0;n<V[e].length;n++)t=E("div"),t.className="full-image",t.id="baguette-img-"+n,F.push(t),x.appendChild(F[n])}}function l(e){e||(e={});for(var t in j)A[t]=j[t],"undefined"!=typeof e[t]&&(A[t]=e[t]);x.style.transition=x.style.webkitTransition="fadeIn"===A.animation?"opacity .4s ease":"slideIn"===A.animation?"":"none","auto"===A.buttons&&("ontouchstart"in window||1===V[q].length)&&(A.buttons=!1),B.style.display=I.style.display=A.buttons?"":"none"}function c(e){"block"!==N.style.display&&(k(document,"keydown",i),X=e,d(X,function(){y(X),b(X)}),h(),N.style.display="block",setTimeout(function(){N.className="visible",A.afterShow&&A.afterShow()},50),A.onChange&&A.onChange(X,F.length))}function u(){"none"!==N.style.display&&(w(document,"keydown",i),N.className="",setTimeout(function(){N.style.display="none",A.afterHide&&A.afterHide()},500))}function d(e,t){var n=F[e];if("undefined"!=typeof n){if(n.getElementsByTagName("img")[0])return t&&t(),void 0;imageElement=V[q][e],imageCaption="function"==typeof A.captions?A.captions.call(V[q],imageElement):imageElement.getAttribute("data-caption")||imageElement.title,imageSrc=f(imageElement);var o=E("figure"),i=E("img"),a=E("figcaption");n.appendChild(o),o.innerHTML=\'<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>\',i.onload=function(){var n=document.querySelector("#baguette-img-"+e+" .spinner");o.removeChild(n),!A.async&&t&&t()},i.setAttribute("src",imageSrc),o.appendChild(i),A.captions&&imageCaption&&(a.innerHTML=imageCaption,o.appendChild(a)),A.async&&t&&t()}}function f(e){var t=imageElement.href;if(e.dataset){var n=[];for(var o in e.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=e.dataset[o]);keys=Object.keys(n).sort(function(e,t){return parseInt(e)<parseInt(t)?-1:1});for(var i=window.innerWidth*window.devicePixelRatio,a=0;a<keys.length-1&&keys[a]<i;)a++;t=n[keys[a]]||t}return t}function g(){var e;return X<=F.length-2?(X++,h(),y(X),e=!0):A.animation&&(x.className="bounce-from-right",setTimeout(function(){x.className=""},400),e=!1),A.onChange&&A.onChange(X,F.length),e}function p(){var e;return X>=1?(X--,h(),b(X),e=!0):A.animation&&(x.className="bounce-from-left",setTimeout(function(){x.className=""},400),e=!1),A.onChange&&A.onChange(X,F.length),e}function h(){var e=100*-X+"%";"fadeIn"===A.animation?(x.style.opacity=0,setTimeout(function(){D.transforms?x.style.transform=x.style.webkitTransform="translate3d("+e+",0,0)":x.style.left=e,x.style.opacity=1},400)):D.transforms?x.style.transform=x.style.webkitTransform="translate3d("+e+",0,0)":x.style.left=e}function m(){var e=E("div");return"undefined"!=typeof e.style.perspective||"undefined"!=typeof e.style.webkitPerspective}function v(){var e=E("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==(e.firstChild&&e.firstChild.namespaceURI)}function y(e){e-X>=A.preload||d(e+1,function(){y(e+1)})}function b(e){X-e>=A.preload||d(e-1,function(){b(e-1)})}function k(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function w(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)}function C(e){return document.getElementById(e)}function E(e){return document.createElement(e)}function T(){r(),n(),w(document,"keydown",i),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),X=0,q=-1,R.length=0,V.length=0}var N,x,B,I,L,P,H=\'<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>\',M=\'<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>\',S=\'<svg width="30" height="30"><g stroke="rgb(160, 160, 160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>\',A={},j={captions:!0,buttons:"auto",async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null},D={},X=0,q=-1,G=!1,O=/.+.(gif|jpe?g|svg|png|webp)/i,R=[],V=[],F=[],U={},W=function(e){e.target&&"IMG"!==e.target.nodeName&&"FIGCAPTION"!==e.target.nodeName&&u()},z=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,p()},J=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,g()},K=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,u()},Q=function(e){P=e.changedTouches[0].pageX},Y=function(e){G||(e.preventDefault?e.preventDefault():e.returnValue=!1,touch=e.touches[0]||e.changedTouches[0],touch.pageX-P>40?(G=!0,p()):touch.pageX-P<-40&&(G=!0,g()))},Z=function(){G=!1};return[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),[].filter||(Array.prototype.filter=function(e,t,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)e.call(t,n[i],i,n)&&o.push(n[i]);return o}),{run:e,destroy:T,showNext:g,showPrevious:p}});    baguetteBox.run(".gallery", { });  </scr' +
        "ipt> "
    );
  })();
})();
