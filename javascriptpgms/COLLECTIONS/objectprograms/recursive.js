var pattern="ABABC";
var dict={};
for(let char of pattern){
    if(char in dict){
        console.log("first recursive character is"+char);
        break;
    }
    else{
        dict[char]=1;
    }
}