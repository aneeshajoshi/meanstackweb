class MathsPg{
    add(){
        console.log("no arg method")
    }
    add(num1){
        console.log("single arg method")
    }
    add(num1,num2){
        console.log("two arg method")
    }
}
var m=new MathsPg();
m.add()
//method overloading :same method name different argument name
//but in JS recently implemented method will only executed