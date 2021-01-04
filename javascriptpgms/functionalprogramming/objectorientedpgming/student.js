class Student{
//initalizing instance variable,setStudent()
    //setStudent=(rollno,names,course)=>{
    constructor(rollno,names,course){

        this.rollno=rollno;//instance variable always prepend with this keyword,here this.rollno
        this.names=names;
        this.course=course;

    }
    printStudent=()=>{
        console.log("rollno:"+this.rollno);
        console.log("name:"+this.names);
        console.log("course:"+this.course);

    }

}
let obj=new Student(101,"anu","Meanstack");
//obj.setStudent(101,"anu","Meanstack");
obj.printStudent()
/*console.log(obj.names)//to acess instance varible outside the class we can use referncename.instance name
obj.names="aneesha";
console.log(obj.names)*/