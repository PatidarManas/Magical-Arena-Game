//this file contains various functions which are used to check in unit testing

export function isTrue(value,message) {
    if(value !== true){
        throw new Error(`Test Failed: ${message}.`)
    }
}


export function isEqual(actual,expected,message) {
    if(actual !== expected){
        throw new Error(`Test Failed: ${message},actual value: ${actual} and expected value: ${expected}`);
    }
}

export function isInRange(value,valueA,valueB,message) {
    if(value < valueA || value > valueB){
        throw new Error(`Test Failed: ${message},value not in range`);
    }
}

