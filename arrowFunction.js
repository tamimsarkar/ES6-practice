//vanilla js function

const math1 = function(x , y){
    math = x+y;
    return math;
}
console.log(math1(3,4))

//ES6 function declaration

const math2 = (x ,y) => x+y;
console.log(math2(3,4))

const allFingers = () => 'items of Fingers is ' + 5;
console.log(allFingers());

// multiine math 

const multiMath = (x , y) =>{
    const sum1 = x+y;
    const sum2 = x-y;
    const result = sum1 * sum2;
    return result;
}

console.log(multiMath(12,2));