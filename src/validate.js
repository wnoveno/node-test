function validateRecursive(number){
    let length = number.toString().length;
    if(length > 1){
        let numbers = number.toString().split('');
        let sum = numbers.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        return validateRecursive(sum);
    }else {
        return number;
    }
}
console.log(validateRecursive(444444));


function validatePromise(number) {
  // Return a new promise.
  let length = number.toString().length;
   if(length > 1){
        let numbers = number.toString().split('');
        let sum = numbers.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        return validatePromise(sum);
    }else {
        return new Promise(function(resolve, reject) {
            resolve(number)
        });
    }
}

validatePromise(444444).then(function(response) {
  console.log(response);
});




