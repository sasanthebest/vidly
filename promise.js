const promis=new Promise((resolve,reject)=>{
    const isNull=true
    if (!isNull){
        reject(new Error('the value is not null'))
    }
    resolve('correct')
    
})

promis
.then(res=>console.log(res))
.catch(err=>console.log(err.message))
.finally(f=>console.log('finally'))