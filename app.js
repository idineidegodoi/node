const express = require("express");
const res = require("express/lib/response");

const app = express();

app.use(express.json());

//Implentada a listagem de cadastros
app.get("/", (req, res) => {
    res.send("Olá, seja Bem vindo!");
});

//Implementado o método GET visualização de parâmetros por uma URL
app.get("/contato/:id", (req, res) => {
    const { id } = req.params;
    const { sit } = req.query;
    return res.json({
        id,
        nome: "Idinei",
        email: "idineig@gmail.com",
        sit
    })
});

//Implementação da rota POST para salvar novos cadastros
app.post("/contato", (req, res) => {
    var { nome } = req.body;
    var { email } = req.body;
    //Implementar a regra para salvar no banco de dados
    return res.json({
        nome,
        email
    });
});

//Implementado a rota para edição (PUT) de um registro
app.put("/contato/:id", (req, res) => {
    const { id } = req.params;//id vindo da passado como parâmetro pela URL
    const { _id, nome, email } = req.body;//id passado internamente pela API(cada uma tem sua aplicação específica)

    return res.json({
        id,
        _id,
        nome,
        email
    });
});

//Requisão para deleção dos dados
app.delete("/contato/:id", (req, res) => {
    const { id } = req.params;

    //implementação aqui para apagar no banco de dados

    return res.json({
        id
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso na porta 8080: http://localhost:8080");
});