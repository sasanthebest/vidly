

function getUser(id,callback) {
    setTimeout(()=>{
        console.log('reading the database');
        const user={id:id,name:'sasan'}
        getRepositories(user.name,(repos)=>{
            user.repositories=repos
            callback(user)  

        })
    },3000)}


// function getRepositories(username,callbak){
//     setTimeout(()=>{
//         console.log(`searching the repositories of ${username}`);
        
//         callbak([
//             {id:1,repoName:'vidly'},
//             {id:2,repoName:'barandaz'}
//         ])
//     },5000)
// }
function getRepositories(username,callback){
    console.log('start proccessing');
    setTimeout(()=>{
        console.log(`searching the repositories of ${username}`);
        
        callback(  [
            {id:1,repoName:'vidly'},
            {id:2,repoName:'barandaz'}
        ])
    },5000)
    console.log('done')
}


console.log('Befor');
// const user=getUser(1,(user)=>console.log(user))
const repos=getRepositories('sasan',repos=>{console.log(repos)})

console.log('After');
// setTimeout(()=>{
//     console.log(repos);
// },7000)