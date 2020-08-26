// Implement the multiply function here

function multiply(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a * b;
    }
    return 'error : arguments must be numbers'
}



module.exports = multiply;