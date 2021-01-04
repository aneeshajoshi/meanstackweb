var arr=[1,5,3,6,2,8,4];
var element=8;
flag=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==element){
        flag=flag+1;
        break;
    }
    
}
if(flag==0){
    console.log("element is not found")
}
else{
    console.log("element is found")
}