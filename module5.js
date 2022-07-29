// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const movies = ['The King\'s Speech', 'The Artist', 'Argo', '12 Years a Slave', 'Birdman or (The Unexpected Virtue of Ignorance)',
                'Spotlight', 'Moonlight', 'The Shape of Water', 'Green Book', 'Parasite']
for (const iterator of movies) {
    console.log(iterator)
}
// Given an array of car manufacturers, convert the array to a string and back to an array
const cars = ['Ford', 'Alfa Romeo','Aston Martin','Chevrolet','Chrysler']
const carsInString = cars.join(', ')
console.log(carsInString)
const newCars = carsInString.split(', ')
console.log(newCars)
// Given an array of the names of your friends, add the words hello to each element of the array
const friends = ['Ann', 'Ben', 'Maxim', 'Lin']
for (let i = 0; i < friends.length; i++) {
    friends[i] = 'Hello ' + friends[i]
}
console.log(friends)
// Convert numeric array to Boolean
const numbers = [-1,0,1,2,-150]
const booleans = numbers.map(el => Boolean(el))
console.log(booleans)
// Sort the array [1,6,7,8,3,4,5,6] in descending order
const array = [1,6,7,8,3,4,5,6];
array.sort((a,b) => b-a)
console.log(array)
// Filter array [1,6,7,8,3,4,5,6] by value> 3
const sortedArray = array.filter(el => el > 3)
console.log(sortedArray)
// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
const findNumber = (arr, num) => {
    let res
    arr.forEach( (element, index) => {
        if (element === num) {
            res = index
        }
    });
    return res
}
// ﻿Implement a loop that will print the number 'a' until it is less than 10
console.log(findNumber(array, 4))
console.log(findNumber(array, 2))
// Implement a loop that prints prime numbers to the console
const printPrimes = (max) => {
    const isPrime = (a) => {
        const b = Math.sqrt(a);
        let i = 2;
        flag = true;
        if (a < 2) {return false}
        while (flag & i<=b){
            if (a%i === 0){
                return false
            }
            else {i++}
        }
        return true;
    }
    let i = 2
    while (i <= max){
        if (isPrime(i)){console.log(i)}
        i++
    }
}
printPrimes(50)
// Implement a loop that prints odd numbers to the console
const printOdds = (max) => {
    i = 1
    while (i <= max){
        console.log(i)
        i++
        i++
    }
}
printOdds(21)