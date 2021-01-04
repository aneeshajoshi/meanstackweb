var arr=[10,110,12,14,15,16];
var items=arr.splice(1,2)
console.log(arr)
var sum=0;
for(let items of arr)
{
    sum=sum+items;
}
console.log(sum)