const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};let n=null;function e(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnStart.addEventListener("click",(function(){if(null!==n)return;n=setInterval(e,1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(n),n=null}));
//# sourceMappingURL=01-color-switcher.a1a6e3c6.js.map