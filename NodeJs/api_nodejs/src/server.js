// const path = require("path");
// const express = require('express');
const path = require('path')
const express = require('express')
const {register} = require('./models')

const app = express();

app.use(express.static(path.join(__dirname, "public")));
// запуск статического файлового сервера,
// который смотрит на папку public/ (в нашем случае отдает index.html)

app.get('/api', function (req, res) {
    res.send("Бла бла бла бла бла");
});

app.get('/json', function (req, res) {
    res.json({
        key: "value"
    });
});

app.get('/reg', (request, response) => {
    let username = request.query.username;
    let realname = request.query.realname;
    register(username,realname);
    response.send("Запись успешна!!!!"+username+"-"+ realname);
});

app.get('/redirect', (request, response) => {
    response.redirect('/abcd');
});

app.listen(1337, () => {
    console.log("Express server listening on port 1337")
});
