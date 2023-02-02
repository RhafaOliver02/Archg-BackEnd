const express = require('express')
const path = require("path")
const userRoutes = require("./Routes/user-routes")
const ManegeDB = require("./db/ManegeDB")

class Server {
    constructor() {
        //Configuração Server
        this.app = express()
        const port = process.env.PORT || 3030

        //conexão com Banco
        ManegeDB.connect()

        //Express middlewares
        this.app.use(express.json())
        this.app.use(express.static(path.join(__dirname, 'public')))
        this.app.use("/api", userRoutes)

        //Configuração de Porta
        this.app.listen(port, function () {
            console.log(`Server running at http://localhost:${port}/`);
        })

    }
}

new Server()