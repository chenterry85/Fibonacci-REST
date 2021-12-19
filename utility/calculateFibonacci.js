function calculateFibonacci(n) {
    if (n < 0) {
        return -1;
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    var fibonacci = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci[n];
}

module.exports = calculateFibonacci;