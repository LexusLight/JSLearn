const url = "http://localhost:1337/json";

fetch(url).then((response) => {
    response.json()
}).then(json => {
    console.log(json);
}).catch((e)=>{
    console.log(e);
})
