/*var heads=document.getElementsByTagName("h1")
for(head of heads){
    head.style.color="green";
}
var hd=document.getElementById("one")
hd.style.color="cyan"
var hd=document.getElementById("two")
hd.style.color="blue"
var lis=document.getElementsByClassName("lis")
for (head of lis){
    head.style.color="yellow"
}
var dm=document.getElementById("dm")
dm.textContent="documentObjectMethod"
dm.innerHTML="<em>documentObjectMethod</em>"*/
var lis=document.querySelectorAll("li")
lis.forEach(li=>li.style.color="cyan")
var lis=document.querySelectorAll(".lis")
lis.forEach(li=>li.style.color="red")
var hd=document.querySelector("#one")
hd.style.color="green"
