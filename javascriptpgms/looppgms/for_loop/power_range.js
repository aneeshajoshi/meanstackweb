var num=3;
var lower=3;
var upper=27;
for(let i=1;i<=upper;i++){
  var  power=i**num;
  if((lower<=power)&(power<=upper)){
    console.log(power);
}

}
