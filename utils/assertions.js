//this file contains various functions which are used to check in unit testing

export function isTrue(value, message) {
    if(typeof value != 'boolean' || value !== true){
        throw new Error(`Test Failed: ${message}.`)
    }
}


export function isEqual(actual, expected, message) {
    if(actual !== expected){
        throw new Error(`Test Failed: ${message},actual value: ${actual} and expected value: ${expected}`);
    }
}

export function isInRange(value, min, max, message) {
    if(value < min || value > max){
        throw new Error(`Test Failed: ${message},Value: ${value} not in range [${min}, ${max}]`);
    }
}

export function throwsError(func, message) {
    try {
        func();
        throw new Error(`Test Failed: ${message}, Expected error not thrown`);
    } catch (error) {
        console.log(`Expected error thrown : ${error}`);
    }
}
