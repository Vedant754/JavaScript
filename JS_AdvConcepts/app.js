/* PROMISES IN JAVASCRIPT */

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Promise Fetched");
//         reject(123);
//     },5000)
// })


function getData1(getId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data = " , getId);
            resolve(123);
        },5000)
    })
}

function getData2(getId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data = " , getId);
            resolve(123);
        },5000)
    })
}

getData1(123).then((res)=>{
    console.log("Loading Data 1");
    return getData2(223);
})
.then((res)=>{
    console.log("Loading Data 2");
})

// p1.catch((res)=>{
//     console.log("Rejected with",res);
// })