
function countPosition (str){

var obj = {};
var noSpace = str.split("")


  for (var i = 0; i < noSpace.length; i++){

   var letter = noSpace[i];

    if (letter === " "){
      continue;
    }

    if(!obj[letter]){
    var arr = [];
    arr.push(i)
    obj[letter]= arr
    }
    else if(obj[letter]){
       obj[letter].push(i);

    }

   }
  return obj;
}

console.log(countPosition("lighthouse in the house"))