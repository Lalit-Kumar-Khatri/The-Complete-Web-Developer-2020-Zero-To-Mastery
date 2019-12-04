const first = () => {
    const greet = 'hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// closures -- a function ran, the function executed. It's never going to execute again.
// But it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope.

// Currying:

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5);     //25


// Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);


// Avoiding side effects and functional purity

