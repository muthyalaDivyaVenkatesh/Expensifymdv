import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDCvj-1O0klDxHuA2X1DnaMzzumci57uK4",
  authDomain: "expensify-dcf04.firebaseapp.com",
  databaseURL: "https://expensify-dcf04.firebaseio.com",
  projectId: "expensify-dcf04",
  storageBucket: "expensify-dcf04.appspot.com",
  messagingSenderId: "643565622222",
  appId: "1:643565622222:web:f366e85f2714cd4398d19f",
  measurementId: "G-5P3KZ5BDRE",
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export  { firebase, googleAuthProvider,  database as default}



// database.ref("notes").push({
//   title: "To Do",
//   body: "Go for run",
// });

// database.ref("notes").push({
//   title: "Cource Topuics",
//   body: "Native, Python",
// });

// // database.ref('expenses').push({
// //     description:"Rent",
// //     note: "jan Month",
// //     amount: 4500,
// //     createdAt: 89000000
// // })

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot,
//       });
//     });
//     console.log(expenses);
//   })
//   .catch((e) => {
//     console.log("Error value Failed", e);
//   });


//   // ref expenses
//   database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot,
//       });
//     });
//     console.log(expenses);
//   })

//   //childRemove
//   database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())  
//   })

// //  child_changed()
// database.ref('expenses').on('child_changed',(snapshot)=>{
//   console.log("we are seeing child changed")
//   console.log(snapshot.key ,snapshot.val())
// })

// //  child_added
// database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log("we are inside child added")
//   console.log(snapshot.key,snapshot.val())
// })


// const notes = [
//   { id: 12, title: 'Note' ,body: "These is note" },
//   { id: 14,  title: 'Note2' ,body: "These is  another note" }
// ];

// database.ref('notes').set(notes)

// database.ref('')

// const firebaseNotes = {
//   notes: {
//     999099:{
//        title:"kk",
//        body:'jkklk'
//     },
//     0000000:{
//       title2:'oooo',
//       body:'9999999'
//     }
//   }
// }

// ref and on
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// // snapShot
// const onValueChange = database.ref().on('value',(snapshot) =>{
//   console.log(snapshot.val())
// },(e) =>{
//   console.log()
// })

// // We will print the ref here
// // database.ref().on('value',(snapShot)=>{
// //   console.log(snapShot.val())
// // });

// setTimeout(()=>{
//   database.ref('age').set(40)
// },3500)

// setTimeout(()=>{
//   database.ref().off(onValueChange)
// },4500)

// setTimeout(()=>{
//   database.ref('age').set(29)
// },3500)

// database.ref('location/city').once('value').then((snapShot)=>{
//   console.log(snapShot.val())
// }).catch((e)=>{
//   console.log("Fetching Error",e)
// })

// database
//   .ref()
//   .set({
//     name: "mdvenkatesh",
//     age: 26,
//     stressLevel:6,
//     isSingle: true,
//     job: {
//       title:'SoftwareDeveloper',
//       company:'Google'
//     },
//     location: {
//       city: "Chennai",
//       country: "India",
//     },
//   }).then(()=>{
//     console.log('Date is Saved')
//   }).catch((e)=>{
//     console.log('This Failed',e)
//   })

//  database.ref().update({
//    stressLevel:9,
//    'job/company': 'Amazon',
//    'location/city': 'Banglore'
//  }).then(()=>{
//    console.log("Updated Successfully")
//  }).catch((e)=>{
//    console.log("There is error",e)
// })

// database.ref('isSingle').remove().then(()=>{
//   console.log("You have removed Successfully")
// }).catch((e)=>{
//   console.log("we failed to delete",e)
// })

// database.ref().update({
//   name:'mdv',
//   city:'rjy',
//   job:'Software Developer',
//   isSingle:null
// }).then(()=>{
//   console.log("Updated Successfully")
// }).catch((e)=>{
//   console.log("Update Failed",e)
// })

console.log("I made a request to change the data");
