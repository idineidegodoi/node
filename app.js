const express = require("express");
const res = require("express/lib/response");

const app = express();

app.get("/", (req, res) => {
    res.send("Bem vindo até logo!");
});

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso na porta 8080: http://localhost:8080");
});