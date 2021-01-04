var text="hai hello how hello hai hello how";
var words=text.split(" ");
console.log(words);
var ob={};
for(let word of words){
    if(word in ob){
        ob[word]+=1;
    }
    else{
        ob[word]=1;
    }
}
console.log(ob)