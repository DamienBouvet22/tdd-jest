// Implement the FizzBuzz function here

const fizzbuzz = (number) => {
        if ((number % 3 === 0 && number % 5 === 0)) {
            return 'FizzBuzz'
        } else if (number % 3 === 0 /*|| i.toString().includes('3')*/) {
            return 'Fizz'
        } else if (number % 5 === 0 /*|| i.toString().includes('5')*/) {
            return 'Buzz';
        } else {
            return number;
        }
};

const list = (number) => {
    let array = [];
    for (let i = 1; i <= 100; i++ ){
        array.push(fizzbuzz(i));
    }
    console.log(array);
    if (number > 0) {
        return array[number-1];
    } else {
        throw 'error';
    }

};
// list(1);

module.exports = list;



