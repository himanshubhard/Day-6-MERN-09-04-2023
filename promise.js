let age=20;
const info=new Promise((resolve, reject) => {
    if(age>18){
        resolve("you can vote");
    }else{
        resolve("you cant vote");
    }

    
})
info.then(result=>console.log(result))
 .catch(error=>console.log(error));

 const resultInfo=async()=>{
    try{
    let reult=await info;
    console.log(result);
 } catch(error){
    console.log(error);
 }
}