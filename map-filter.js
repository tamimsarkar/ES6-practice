const numbers = [3,4,5,6,7];
const map = numbers.map(function(element){
    return element * element;
})

console.log(map);

//ES 6 version 

const nums = numbers.map(x => x * x)
console.log(nums);

//filter
const filtering = numbers.filter(x=> x>4);
console.log(filtering);

// find

const findIt = numbers.find(x => x>4)

console.log(findIt);