const person = {
    name: "Pedro",
    age: 19,
    hobbies: [
        'guitar',
        'music',
        'books',
    ],
}


const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
        typeString.indexOf(' ') + 1,
        typeString.indexOf(']')
    ).toLowerCase()
}

const cloneArray = (element) => {
    if (typeCheck(element) !== 'array') return element
    return element.map(deepClone)
}

const cloneObject = (element) => {
    if (typeCheck(element) !== 'object') return element
    return Object.fromEntries(
        Object.keys(element).map(key => [key, deepClone(element[key])]
        )
    )
}

const freeze = (data) => Object.freeze(data);

const deepClone = (element) => {
    switch (typeCheck(element)) {
        case 'array':
            return freeze(cloneArray(element));
        case 'object':
            return freeze(cloneObject(element));
        default:
            return element;
    }
}

console.log(deepClone(person).hobbies === person.hobbies) // false
console.log(deepClone(person) === person) // false


const clonedPerson = deepClone(person)
console.log(clonedPerson === person) // false
console.log(clonedPerson.nome) // Pedro

const newClonedPerson = clonedPerson
newClonedPerson.nome = 'Thomas'

console.log(newClonedPerson.nome) // Thomas
console.log(clonedPerson.name) // Thomas
