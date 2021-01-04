var num=241
var data="";
var num1=num;
while(num!=0)
{
    var digit=num%10;
    data=data+String(digit)
    num=Math.floor(num / 10);



}
console.log("reverse of " +num1 +" is " +data)