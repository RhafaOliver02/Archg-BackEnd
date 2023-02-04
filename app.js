const express = require('express');
const app = express();
const db = require('./models/db');
const User = require('./models/User');
const Client = require('./models/Client');
const Company = require('./models/Company');
const File = require('./models/File');
const Folder = require('./models/Folder');
const Projeto = require('./models/Projeto');
const Task = require('./models/Task');
const Review = require('./models/Review');




app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página inicial teste!");
});

app.post("/cadUser", async (req, res) => {
    console.log(req.body);

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário Cadastrado com Sucesso!"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro no Cadastro!"
        })
    });
});

app.post("/cadTask", async (req, res) => {
    console.log(req.body);

    await Task.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Anotação Cadastrada com Sucesso!"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro no Cadastro!"
        })
    });
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 300: http://localhost:3000");
}); 