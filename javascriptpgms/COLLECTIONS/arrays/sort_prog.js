var arr=[8,6,9,5,3,4,2]
/*for(let i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
        
    }
}
console.log(arr)*/
arr.sort((no1,no2)=>no1-no2);
console.log(arr);
arr.sort((no1,no2)=>no1>no2?-1:1);
console.log(arr);
