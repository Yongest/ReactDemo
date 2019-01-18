
console.log(222)

function Persion(obj){
    this.name = obj.name
    this.age = obj.age
}

// 静态属性
Persion.info = '这是一个人'

class Animal {

    constructor(obj){
        // 实例属性， 只能实例访问
        this.name = obj.name 
        this.gender = obj.gender
    }

    // 静态属性，只能类，或者构造函数访问。
    static info = '这是一个动物'

    // 实例方法，此方法放在原型上，创建实例时，不会多占用内存。
    yield(){
        console.log('我叫了')
    }
    // 静态方法，用的不多
    static show(){
        console.log('我出现了')
    }
}

let rabit = new Animal({
    name:'白兔',
    gender:'雌'
})

console.log(rabit)
console.log(Animal.info)