class Person{
    setPerson=(age,names,gender)=>{
        this.age=age;
        this.names=names;
        this.gender=gender;
        
    }

    printPerson=()=>{

        console.log("name:"+ this.names);
        console.log("age:" + this.age);
        console.log("gender:"+ this.gender);


    }

}
var obj=new Person();
obj.setPerson(25,"ajay","male");
obj.printPerson();
var obj1=new Person();
obj1.setPerson(26,"vijay","male");
obj1.printPerson();