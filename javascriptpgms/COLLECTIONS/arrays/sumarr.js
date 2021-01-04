var arr=[1,2,3,4,5,6];
var sum=6;
/*for(let i=0;i<arr.length;i++)
{
    let temp=arr[i];
    for(j=i+1;j<arr.length;j++)
    {
        let sec=arr[j];
        if(temp+sec==sum){
            console.log(temp,sec)
        }
    }
}*/
arr=arr.sort((n1,n2)=>n1-n2);
var low=0;
var upp=arr.length-1;
while(low<upp){
    let tot=arr[low]+arr[upp];
    if(tot>sum){
        upp=upp-1;
    }
    else if(tot<sum){
        low=low+1;
    }
    else{
        console.log(arr[low]+" "+arr[upp]);
        low=low+1;
    }
}