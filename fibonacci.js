//Fibonacci Secuence Recursive mode (Big O more dificult)
const recursiveFibo = n => {
    if (n < 2) return n;
    return recursiveFibo(n - 2) + recursiveFibo(n - 1);
}

// Fibonacci Secuence normal
const normalFibo = n => {
    const fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    return fib[n];
}

console.log(recursiveFibo(19));
console.log(normalFibo(19));