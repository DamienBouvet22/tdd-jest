// Implement the sum function here

function sum(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    }
    return 'error : arguments must be numbers'
}



module.exports = sum;