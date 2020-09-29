const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        }, ms)

    })
}

Promise.all([sleep(1000),sleep(5000)])
    .then(()=>{
        console.log("Оба промиса вернули ответ.");
        }
    )

Promise.race([sleep(1000),sleep(5000)])
    .then(()=>{
            console.log("Первый успевший промис активирует race.");
        }
    )