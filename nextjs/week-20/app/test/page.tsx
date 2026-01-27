function getParams(): Promise<{postId: string}>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({postId:"9"})
            reject("something went wrong")
        },1500)

    })
}

 export default async function Page(){
    console.log("it started to work. isn't it")
    const params = await getParams();
    console.log(params.postId)
}