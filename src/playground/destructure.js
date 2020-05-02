//  objectDestrcturing 


// console.log("destructring")

// const person = {
//     name:'Mdvenkatesh',
//     age:23,
//     location:{
//         city:'Kakinada',
//         temp:92
//     }
// }


// const {name:firstName="Anonymous",age} = person
// const name = person.name;
// const age = person.age;
// const {name,age} = person;
// const {city,temp:temparature} = person.location

// console.log(`${firstName} is ${age}`)
// if(city && temparature){
//     console.log(`temp  in ${city} is  ${temparature}`)
// }

// const book = {
//     title:'Ego is Enemy',
//     author:'mdv',
//     publisher:{
//        name:'mdv'
//     }
// }

// const {name:publisherName='selfPublising'} = book.publisher

// console.log(publisherName)


// ArrayDestructuring
const address= ['f1 jayandraNagar','kkd','andhraPradesh',533003]

const [,,myState="NewYork"] = address

console.log(`you are in  ${myState}`) 

const item = ['coffee(hot)','$2.00','$2.50','$2.75']

const [coffee, ,price] = item

console.log(`${coffee} is ${price}`)