var employees=[
    [100,"ajay","developer",25000],
    [101,"vijay","developer",30000],
    [101,"jay","QA",25000]

]
for(employee of employees){
    console.log(employees[1])
}
for(employee of employees){
    console.log(employee[2]);
}
for(let emp of employees){
    if(emp[3]>25000)
    {
        console.log(emp);
    }
}
var tot=0;
for(let emp of employees)
{
    tot=tot+emp[3];
}
console.log(tot);