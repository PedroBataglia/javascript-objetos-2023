const person = {}

const clonedPerson = person

person.name = "John";

console.log(person);
console.log(clonedPerson);

const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
        typeString.indexOf(' ') + 1,
        typeString.indexOf(']')
    ).toLowerCase()
}

console.log(typeCheck([]));      // array
console.log(typeCheck(null));    // null 
console.log(typeCheck({}));      // object
console.log(typeCheck('teste')); // string
console.log(typeCheck(123));     // number


// const cloneArray = (element) => {
//     const clonedArray = []
//     for (const item of element) {
//         if (typeCheck(item) === 'array') clonedArray.push(cloneArray(item))
//         else clonedArray.push(item)
//     }
//     return clonedArray
// }

const cloneArray = (element) => {
    if (typeCheck(element) !== 'array') return element
    return element.map(cloneArray)
};

const numbers = [1, 2, 3];
const numbersCopy = numbers;
console.log(numbers === numbersCopy); // true
console.log(numbers === cloneArray(numbers)); // false