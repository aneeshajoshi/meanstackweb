var cli=document.querySelector("#clk");
cli.addEventListener("click",()=>{
    cli.textContent="clicked";
    cli.style.color="red";
})
var  ms=document.querySelector("#ms");
ms.addEventListener("mouseover",()=>{
    ms.textContent="Mouse currently over me"
})
var  db=document.querySelector("#db");
db.addEventListener("dblclick",()=>{
    db.textContent="Double clicked"
})
var  mo=document.querySelector("#mo");
mo.addEventListener("mouseout",()=>{
    mo.textContent="Mouse currently out of me"
})