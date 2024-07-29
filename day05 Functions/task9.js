function repeat(func, times) {
    for (let i = 1; i <= times; i++) {
        func(i);
    }
}

function number(i) {
    console.log(i);
}

repeat(number, 3);