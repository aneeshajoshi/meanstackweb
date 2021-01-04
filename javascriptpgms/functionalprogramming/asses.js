var employees=[
    {id:100,name:"ajay",salary:25000,year_join:1980,year_resign:1990},
    {id:101,name:"vjay",salary:22000,year_join:1982,year_resign:1989},
    {id:102,name:"tom",salary:30000,year_join:1980,year_resign:1991},
    {id:103,name:"tinu",salary:18000,year_join:1975,year_resign:1992},
    {id:104,name:"jain",salary:25000,year_join:1978,year_resign:1985}
    
    
    ]
   /* for(let emp of employees){
        console.log(emp.name);
    }*/
  //  employees.forEach(emp=>console.log(emp.name)
 // employees.filter(emp=>emp.salary>24000).forEach(emp=>console.log(emp.name))
 employees.filter(emp=>(emp.year_resign - emp.year_join)>=10).forEach(emp=>console.log(emp.name))
var salary=employees.map(emp=>emp.salary).
            reduce((sal1,sal2)=>sal1>sal2?sal1:sal2);
console.log(salary)
  

