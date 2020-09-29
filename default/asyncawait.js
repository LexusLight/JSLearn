const timer = ms => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Промис выполнился")
        }, ms)
    })
}

// async function waitTimer() {
//     console.log("Ожидаем");
//     console.log(await timer(2000));
//     console.log(await timer(2000));
//     console.log(await timer(2000));
//     console.log(await timer(2000));
// }

const waitTimer = async() => {
    console.log("Ожидаем");
    console.log(await timer(2000));
    console.log(await timer(2000));
    console.log(await timer(2000));
    console.log(await timer(2000));
}

waitTimer().then(()=>{
    console.log("Асинхронная функция закончена");
})