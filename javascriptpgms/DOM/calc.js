function dis(val){
   // alert("hello")
    var txtbox=document.querySelector(".displaybox")
    txtbox.value+=val;
}
function solve() {
    let data=document.querySelector(".displaybox")
    let result=eval(data.value)
    data.value=result
    
}
let clr=()=>{
    document.querySelector(".displaybox").value=" ";
}