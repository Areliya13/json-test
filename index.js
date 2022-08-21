const testString = 'ahb acb aeb aeeb adcb axeb'
const re = /a.b/gs
console.log(testString.match(re))

const testString2 = '2 + 3 223 2223'
const re2 = /2 \+ 3/
console.log(testString2.match(re2))

const date = new Date()
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

console.log(`Day: ${day}`)
console.log(`Month (from 0): ${month}`)
console.log(`Month (used to): ${month + 1}`)
console.log(`Year: ${year}`)