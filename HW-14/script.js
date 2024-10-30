// Task 1

const users = [
    {
        name:'Ivan',
        age:17,
        gender:'male',
        eyeColor:'brown',
        email:'blabla@gmail.com',
        isActive:false,
    },
    {
        name:'Misha',
        age:13,
        gender:'male',
        eyeColor:'brown',
        email:'hehehehe@gmail.com',
        isActive:true,
    },
    {
        name:'David',
        age:92,
        gender:'male',
        eyeColor:'blue',
        email:'lolololo@gmail.com',
        isActive:false,
    },
    {
        name:'Angela',
        age:2,
        gender:'female',
        eyeColor:'blue',
        email:'doll@gmail.com',
        isActive:false,
    },
];

const getName = arr => arr.map((el) => el.name);

console.log('Task 1');
console.log(getName(users));

// Task 2

const getEyeColor = (arr,eyeColor) => arr.filter((el) => el.eyeColor === eyeColor);

console.log("Task 2")
console.log(getEyeColor(users,"brown"));

// Task 3

const getNameByGender = (arr, gender) => arr.filter((el) => el.gender === gender).map((el) => el.name);

console.log("Task 3");
console.log(getNameByGender(users,'male'));

// Task 4

const getUserByStatus = arr => arr.filter((el) => !el.isActive);

console.log("Task 4");
console.log(getUserByStatus(users));

// Task 5

const getUserByEmail = (arr, email) => arr.find((el) => el.email === email);

console.log("Task 5");
console.log(getUserByEmail(users,'doll@gmail.com'));

// Task 6

const getUserByAgeRange = (arr,min,max) => arr.filter((el) => el.age > min && el.age < max);

console.log("Task 6");
console.log(getUserByAgeRange(users,10,78));


