function getUser(id){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log('reading the database');
        const user={id:id,username:'sasan'}
        resolve(user)
    },3000)
})}

// const getRepositories=(username)=>new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(`searching the repositories of ${username}`);
//         resolve([
//             {id:1,repoName:'vidly'},
//             {id:2,repoName:'barandaz'}
//         ])
//     },5000)

// })

// const getCommits=(repo)=>new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(`searching the commits of repository ${repo}`)
//         resolve([
//             {id:1,commit:'commit 1'},
//             {id:2,commit:'commit 1'}
//         ])
//     }, 9000);

// })

const user=getUser(1)
    .then(res=>{
        console.log('first',res)
        return res
    })
    .catch(err=>console.log(err))

console.log('second',user)

// const repos=getRepositories('sasan')
//     .then(res=>{
//         console.log(res)
//         return res})
//     .catch(err=>console.log(err))


// const commits=getCommits(repos[0]?.repoName)
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))