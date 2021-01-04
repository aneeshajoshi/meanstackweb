var students={
    rol:150,
    name:"ajay",
    course:"bca",
    total:150
}
console.log(students["rol"])
console.log(students.rol)
console.log(students.name)
for(let student in students)
{
    console.log(student+","+students[student]);
}
console.log("gender" in students); 
students["gender"]="male";
students["total"]+=25;
console.log(students);  