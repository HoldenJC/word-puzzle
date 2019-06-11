var userString = prompt("enter string");

var arrayUserString = userString.split('');



for (var i = 0; i < arrayUserString.length; i++) {

  var tempChar = arrayUserString[i].toLowerCase();

    if(tempChar === 'a' || tempChar === 'e' || tempChar === 'i' || tempChar === 'o' || tempChar === 'u') {
      arrayUserString[i] = '-';
    }
}

alert(arrayUserString.join(''));
