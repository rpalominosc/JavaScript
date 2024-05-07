const EventEmitter = require('events');
const eventEmmiter = new EventEmitter();

eventEmmiter.on('tutorial', (num1,num2)=>{
    console.log(num1 + num2);
});
eventEmmiter.emit('tutorial',4,8);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let rodrigo = new Person('Rodrigo');
rodrigo.on('name',()=>{
    console.log('Mi nombre es ' + rodrigo.name);
})

rodrigo.emit('name');