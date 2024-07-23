function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}


function add(x) {
    return x + 2;
}

function mul(x) {
    return x * 3;
}

const result = applyFunctions(add, mul, 5);
console.log(result); 