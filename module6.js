class Animal {
    constructor(name){
        this.name = name;
    }

    move(){
        console.log(`${this.name} can move!`)
    }
}

class Cat extends Animal{
    constructor(name){
        super(name)
    }

}

const cat = new Cat('Meow')
cat.move()