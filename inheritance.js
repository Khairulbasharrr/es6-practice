class Parent {
    constructor() {
        this.fatherName = "Schwerzngger";
        
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.myName = name ;
    }
    getFullName(){
        return this.myName +" "+ this.fatherName;
    }
}
const baby = new Child('Arnold');
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2);