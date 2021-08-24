const person = {name:"Jack William", age: 17, job:"facebook", gfName: "Ema Wartson", address: "Kochu Khet", phone: "01822469568", friends:["Tom hancks", "tom cruise", "Tom yarn"]};

const{ phone }= person;
const complexObject = {
    name: 'abc',
    info:{
        address:'kola bagan',
        leader : 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName , phone,address);
// console.log(gfName , phone);
// console.log(gfName, phone);
// console.log(gfName , phone);

// const friends = ['Shakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan ', 'Sharukh Khan'];
// const [chotoFriend ,...restFriends] = friends;
// console.log(restFriends);