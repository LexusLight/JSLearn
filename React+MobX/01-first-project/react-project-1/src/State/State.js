//Это псевдо BLL, в котором объект имеет информацию для рендеринга

export let data = {
    messages : ["Сообщение 1","Сообщение 2","Сообщение 3"],
    picture_url : ["https://sun9-19.userapi.com/v0KS4WtOc-I3f18YWp19w8xTI2-YKLpqJGLDrQ/0M8pANz4QgE.jpg"],
}

export let reloadSite = () =>{
    console.log("Эту функцию мы переопределяем во избежание цикличности импортов");
}
export const  observerListener = (observer) =>{
    reloadSite = observer;
}

export const addMessage = (text) => {
    data.messages.push(text);
    reloadSite()
}

