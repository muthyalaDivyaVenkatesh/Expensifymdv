const promise = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        // resolve('This is my resolved data')
        reject('SomeThing  went wrong')
    },5000);
})

console.log('before')

promise.then((data)=>{
    console.log(`we are inside promise${data}`)
}).catch((error)=>{
    console.log(`something went wrong : ${error}`)
})

promise.then((data)=>{
    console.log(` 2 we are inside promise${data}`)
})


console.log('after')