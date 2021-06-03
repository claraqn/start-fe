export function minus(a, b) {
    return a - b;
}

export function plus(a, b) {
    return a + b;
}

export function avg(...rest) {
    //   console.log([...rest[0]]);
    //   console.log(rest[0]);

    const arr = Array.isArray(rest[0]) ? [...rest[0]] : rest;
    //   console.log(arr);
    let result = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result += arr[i];
        } else {
            count += 1;
        }
    }
    return result / (arr.length - count);
}

export function ran(a, b) {
    let result = 0;
    if (arguments.length === 2) {
        if (typeof a === 'string' || typeof b === 'string') {
            result = -1;
        } else {
            result = Math.floor(Math.random() * b) + a;
        }
    } else if (arguments.length === 1) {
        result = Math.floor(Math.random() * a) + 0;
    }

    return result;
}

export default {minus, plus, avg, ran};
