// console.log("ok")

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log('大家好')
    }
}

class Chineses extends Person {

    constructor(name,age,IDnumber){
        super(name,age)
        this.IDnumber = IDnumber
    }
}


class American extends Person {
    constructor(name,age){
        super(name,age)
    }
    
}

let p1 = new Chineses('龙',5000,134242432);
console.log(p1)
p1.sayHello()

let p2 = new American('小黄',1000);
console.log(p2)