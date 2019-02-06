function countLetters (str){

var obj = {};
var noSpace = str.split(" ").join('');

  for (var i = 0; i < noSpace.length; i++){
   var letter = noSpace[i];

    if(!obj[letter]){
    obj[letter]=1
    }
    else{

      obj[letter]= obj[letter]+1
    }

  } return obj;
}

console.log(countLetters("lighthouse in the house"))

