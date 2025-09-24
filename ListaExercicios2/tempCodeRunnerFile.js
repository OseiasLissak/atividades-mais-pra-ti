const memoize = {}
const fibonacci = (n, memoize) => {
    if(memoize[n]) {
        return memoize[n]
    }
    if(n <= 1) {
        return 1;
    }
    return memoize[n] = fibonacci(n - 1, memoize) + fibonacci(n - 2, memoize);
}
console.log(`fibonacci: ${fibonacci(40, memoize)}`);
console.log(`fibonacci: ${fibonacci(40, memoize)}`);
console.log(`fibonacci: ${fibonacci(50, memoize)}`);
console.log(`fibonacci: ${fibonacci(40, memoize)}`);
console.log(`fibonacci: ${fibonacci(40, memoize)}`);
