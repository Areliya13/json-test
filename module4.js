// -        Create a car object, add a color property to it with the value equals 'black'
const car = {
    color: "black",
    enginePower: 100,
    power(){
        return "Engine power " + this.power
    }
}
// -        Change the color property of the car object to 'green'
console.log("Before changing ", car)
car.color = "green";
console.log("After changing ", car)
// -        Add the power property to the car object, which is a function and displays the engine power to the console
console.log(car.power)
// -        Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function sumPearsAndApples(p, a) {
    return p + a;
}
console.log("Sum of peears and apples ", sumPearsAndApples(5, 9));
// -       Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
const name = function (myName){
    if(myName == undefined){
        return "there is no such name"
    } else {
        return "Hello " + myName
    }
}
console.log(name("Ann"));
console.log(name());
// -        Write a function for calculating the type of argument and type output to the console
(function (a){
    console.log(typeof a)
})(5)
// -        Write a function that determines whether a number is prime or not
// Without loop? Seriously?
const isPrime = (a) => {
    const b = Math.sqrt(a);
    let i = 2;
    flag = true;
    if (a < 2) {return `The ${a} isn't prime`}
    while (flag & i<=b){
        if (a%i === 0){
            return `The ${a} isn't prime`
        }
        else {i++}
    }
    return `The ${a} is prime`;
}
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(36))
console.log(isPrime(17))
console.log(isPrime(167))
console.log(isPrime(-7))
