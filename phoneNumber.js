
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don’t forget the space after the closing parentheses!

// const createPhoneNumber = array => {
//     let splitPhone = ['(']
    
//     for (i = 0; i < 3; i++){
//         splitPhone.push(array[i])
//     }
//     splitPhone.push(')', ' ')

//     for(i = 3; i < 6; i++){
//         splitPhone.push(array[i])
//     }
//     splitPhone.push('-')

//     for (i = 6; i < 10; i++){
//         splitPhone.push(array[i])
//     }

//    return phoneNum = splitPhone.join('')

// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))



const createPhoneNumber = array => {
    array.unshift('(')
    array.splice(4,0,') ')
    array.splice(8,0,'-')
    return array.join('')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))