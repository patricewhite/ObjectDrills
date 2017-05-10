let decoder = {
  a : 2,
  b : 3,
  c : 4,
  d : 5
}


function decode (word){
    var result = '';
    var string = word.split(' ');
     for (var i = 0, len = string.length; i < len; i++){
        if (string[0] === 'a'){

            result += decoder[key].a;
            console.log(result);
        }
        if (array[i].charAt(0)=== 'b'){

            result += array[i].charAt(2);
        }
        if (array[i].charAt(0)==='c'){

            result += array[i].charAt(3);
        }
        if(array[i].charAt(0)=== 'd'){
            result += array[i].charAt(4);
        } else {

          result += ' ';
        }

    }
    return result;
}

decode('craft block argon meter bells brown croon droop');
