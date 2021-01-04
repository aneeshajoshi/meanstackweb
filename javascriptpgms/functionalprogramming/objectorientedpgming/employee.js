class Employee{
    constructor(eid,ename,designation,salary){
        this.eid=eid;
        this.ename=ename;
        this.designation=designation;
        this.salary=salary;
    }
    printEmp=()=>
{
    console.log("EmployeeId:"+this.eid);
    console.log("EmployeeName:"+this.ename);
    console.log("Designation:"+this.designation);
    console.log("Salary:"+this.salary);
}
}
let obj=new Employee(101,"ajay","Web developer",30000);
//obj.printEmp();
let obj1=new Employee(102,"vijay","Web developer",25000);
//obj1.printEmp();
let obj2=new Employee(103,"sajay","QA",20000);
//obj2.printEmp();
var arr=[];
arr.push(obj);
arr.push(obj1);
arr.push(obj2);
//console.log(arr);
arr.forEach(emp=>console.log(emp.ename));
arr.forEach(emp=>console.log(emp.ename.toUpperCase()))
arr.filter(emp=>emp.salary>23000).forEach(emp=>console.log(emp.ename))
var sal=arr.map(emp=>emp.salary).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
console.log(sal)