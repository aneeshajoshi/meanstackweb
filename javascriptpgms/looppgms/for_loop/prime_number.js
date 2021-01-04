var lower=10;
var upper=30;
for(let i=lower;i<=upper;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }

    }
    if(flag==0){
        console.log(i);
    
    }
    
}
