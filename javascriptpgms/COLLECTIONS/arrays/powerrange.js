/*var arr=[3,2,4,5];
var count=1;
for(let items of arr)
{
    var res=items**count;
    count++;
    console.log(res)
}*/
var arr=[3,2,4,5];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]**(i+1));
}