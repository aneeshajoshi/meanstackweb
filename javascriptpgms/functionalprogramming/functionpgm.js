var arr=[10,11,8,7,12,13];
/*var data=arr.map(num=>num**3);
console.log(data)
var data=arr.map(num=>num**2);
console.log(data)
var data=arr.map(num=>num+num);
console.log(data)
var data=arr.filter(num=>num%2==0)
console.log(data)
var names=["ajay","abi","arun","binoy"]
var data=names.map(name=>name.toUpperCase());
console.log(data)
var data=names.filter(name=>name.charAt(0)=='a')
console.log(data)*/
var maxs=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(maxs);
var mins=arr.reduce((no1,no2)=>no1<no2?no1:no2)
console.log(mins)