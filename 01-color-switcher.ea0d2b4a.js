const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),d=document.querySelector("body");let n=0;const l=document.createElement("div");l.appendChild(e),l.appendChild(t),document.body.appendChild(l),l.style.display="flex",l.style.alignItems="center",l.style.justifyContent="center",l.style.height="100vh",l.style.gap="30px",e.addEventListener("click",(()=>{e.disabled=!0,n=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(n),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.ea0d2b4a.js.map