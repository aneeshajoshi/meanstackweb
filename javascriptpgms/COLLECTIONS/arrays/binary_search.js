var arr = [10, 3, 5, 2, 8];
arr.sort((n1, n2) => n1 - n2);
console.log(arr)
var ele = 2;
var low = 0;
var flag = 0;
var upp = arr.length - 1;
var mid = Math.floor((upp + low) / 2);
while (low <= upp)
    
{
    var mid = Math.floor((upp + low) / 2);
    if (ele>arr[mid]) {
        low = mid + 1;
    }
    else if (ele<arr[mid]) {
        upp = mid - 1;
    }
    else if (ele==arr[mid]) {
        flag=1;
        break; 
    
    }
}
if (flag == 0) {
    console.log("Element not found");

}
else {
    console.log("Element  found");

}