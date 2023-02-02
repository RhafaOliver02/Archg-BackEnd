var express = require('express')

const Services = require("../services")
const Usuario = require("../domain/usuario")

const UsuarioController = require("../controllers/usuario-controller")

class UsuarioRouters{

    constructor(){
        this.usuarioController = new UsuarioController ()
        this.router = express.Router()
        this.loadRouters()
    }
    loadRouters(){

        //Rotas para Users
        this.router.get("/usuario", this.usuarioController.getUser.bind(this.usuarioController))

        this.router.get("/usuarios", this.usuarioController.getallUser.bind(this.usuarioController))
        
        this.router.post("/usuario", this.usuarioController.addUser.bind(this.usuarioController))

        this.router.put("/usuario", this.usuarioController.editUser.bind(this.usuarioController))
        
        this.router.delete("/usuario", this.usuarioController.excluirUser.bind(this.usuarioController))

        //Rotas para Projetos
        this.router.post("/projeto", this.usuarioController.addProjeto.bind(this.usuarioController))

        this.router.get("/projeto", this.usuarioController.getProjeto.bind(this.usuarioController))

        this.router.get("/projetos", this.usuarioController.getallProjeto.bind(this.usuarioController))

        this.router.put("/projeto", this.usuarioController.editProjeto.bind(this.usuarioController))
        
        this.router.delete("/projeto", this.usuarioController.excluirProjeto.bind(this.usuarioController))
        
        //Rotas para Clientes
        this.router.post("/cliente", this.usuarioController.addCliente.bind(this.usuarioController))

        this.router.get("/cliente", this.usuarioController.getCliente.bind(this.usuarioController))

        this.router.get("/clientes", this.usuarioController.getallCliente.bind(this.usuarioController))

        this.router.put("/cliente", this.usuarioController.editCliente.bind(this.usuarioController))
        
        this.router.delete("/cliente", this.usuarioController.excluirCliente.bind(this.usuarioController))

        //Rotas para Companys
        this.router.post("/company", this.usuarioController.addCompany.bind(this.usuarioController))

        this.router.get("/company", this.usuarioController.getCompany.bind(this.usuarioController))

        this.router.get("/companys", this.usuarioController.getallCompany.bind(this.usuarioController))

        this.router.put("/company", this.usuarioController.editCompany.bind(this.usuarioController))
        
        this.router.delete("/company", this.usuarioController.excluirCompany.bind(this.usuarioController))

        //Rotas para Files
        this.router.post("/file", this.usuarioController.addFile.bind(this.usuarioController))

        this.router.get("/file", this.usuarioController.getFile.bind(this.usuarioController))

        this.router.get("/files", this.usuarioController.getallFile.bind(this.usuarioController))

        this.router.put("/file", this.usuarioController.editFile.bind(this.usuarioController))
        
        this.router.delete("/file", this.usuarioController.excluirFile.bind(this.usuarioController))

        //Rotas para Folders
        this.router.post("/folder", this.usuarioController.addFolder.bind(this.usuarioController))

        this.router.get("/folder", this.usuarioController.getFolder.bind(this.usuarioController))

        this.router.get("/folders", this.usuarioController.getallFolder.bind(this.usuarioController))

        this.router.put("/folder", this.usuarioController.editFolder.bind(this.usuarioController))
        
        this.router.delete("/folder", this.usuarioController.excluirFolder.bind(this.usuarioController))

        //Rotas para Reviews
        this.router.post("/review", this.usuarioController.addReview.bind(this.usuarioController))

        this.router.get("/review", this.usuarioController.getReview.bind(this.usuarioController))

        this.router.get("/reviews", this.usuarioController.getallReview.bind(this.usuarioController))

        this.router.put("/review", this.usuarioController.editReview.bind(this.usuarioController))
        
        this.router.delete("/review", this.usuarioController.excluirReview.bind(this.usuarioController))

        //Rotas para Tasks
        this.router.post("/task", this.usuarioController.addTask.bind(this.usuarioController))

        this.router.get("/task", this.usuarioController.getTask.bind(this.usuarioController))

        this.router.get("/tasks", this.usuarioController.getallTask.bind(this.usuarioController))

        this.router.put("/task", this.usuarioController.editTask.bind(this.usuarioController))
        
        this.router.delete("/task", this.usuarioController.excluirTask.bind(this.usuarioController))

    }
}


module.exports = new UsuarioRouters().router