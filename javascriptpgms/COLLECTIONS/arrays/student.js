var students=[
    [1,"st1","MCA",142],
    [2,"st2","MCA",145],
    [3,"st3","BCA",145],
    [1,"st4","BCA",135]
]
console.log("name of students")
for(stud of students){
    console.log(stud[1])
}
console.log("number of students doing MCA");
count=0;
for(stud of students){
    if(stud[2]=="MCA")
    {
        count+=1;
    }
}
console.log(count);
console.log("Total marks of students doing BCA");
sum=0;
for(stud of students){
    if(stud[2]=="BCA"){
        sum=sum+stud[3];
    }
}
console.log(sum);
