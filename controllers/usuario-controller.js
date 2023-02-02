
const Services = require("../services")
const Usuario = require("../domain/usuario")
const Projeto = require("../domain/Projeto")
const Cliente = require("../domain/Client")
const Company = require("../domain/Company")
const File = require("../domain/File")
const Folder = require("../domain/Folder")
const Review = require("../domain/Review")
const Task = require("../domain/Task")
class UsuarioController {

    constructor() {
        this.uService = new Services()
    }

    //Manipulação de Projetos

    async addProjeto(req, res) {
        const projeto = new Projeto(req.body.name, req.body.fase, req.body.hdev, req.body.team, req.body.hprod, req.body.clientid, req.body.companId, req.body.teamlider, req.body.foldersid, req.body.totalpages, req.body.permissions, req.body.labelScheme);
        this.uService.addProjeto(projeto)
        res.json(projeto)
    }

    async getProjeto(req, res) {
        const projeto = await this.uService.getProjeto(req.body)
        res.json(projeto)
    }

    async getallProjeto(req, res) {
        const projeto = await this.uService.getallProjeto();
        res.json(projeto)
    }

    async excluirProjeto(req, res) {
        await this.uService.excluirProjeto(req.body.name)
        res.send("Excluido")
    }

    async editProjeto(req, res) {
        await this.uService.editProjeto(req.body)
        res.send("Alteração Realizada")
    }

    //Manipulação de Users

    async addUser(req, res) {
        const usuario = new Usuario(req.body.email, req.body.nome, req.body.senha, req.body.dataCadastro);
        this.uService.addUser(usuario)
        res.json(usuario)
    }

    async excluirUser(req, res) {
        await this.uService.excluirUser(req.body.email)
        res.send("Excluido")
    }

    async editUser(req, res) {
        await this.uService.editUser(req.body)
        res.send("Alteração Realizada")
    }

    async getUser(req, res) {
        const Users = await this.uService.getUser(req.body)
        res.json(Users)
    }

    async getallUser(req, res) {
        const Users = await this.uService.getallUser();
        res.json(Users)
    }


    //Manipulação de Clientes

    async addCliente(req, res) {
        const client = new Cliente(req.body.name, req.body.email, req.body.companId, req.body.permissions);
        this.uService.addCliente(client)
        res.json(client)
    }

    async getCliente(req, res) {
        const client = await this.uService.getCliente(req.body)
        res.json(client)
    }

    async getallCliente(req, res) {
        const client = await this.uService.getallCliente();
        res.json(client)
    }

    async excluirCliente(req, res) {
        await this.uService.excluirCliente(req.body.email)
        res.send("Excluido")
    }

    async editCliente(req, res) {
        await this.uService.editCliente(req.body)
        res.send("Alteração Realizada")
    }


    //Manipulação de Companys

    async addCompany(req, res) {
        const company = new Company(req.body.name, req.body.email, req.body.companId, req.body.permissions);
        this.uService.addCompany(company)
        res.json(company)
    }

    async getCompany(req, res) {
        const company = await this.uService.getCompany(req.body)
        res.json(company)
    }

    async getallCompany(req, res) {
        const company = await this.uService.getallCompany();
        res.json(company)
    }

    async excluirCompany(req, res) {
        await this.uService.excluirCompany(req.body.name)
        res.send("Excluido")
    }

    async editCompany(req, res) {
        await this.uService.editCompany(req.body)
        res.send("Alteração Realizada")
    }

    //Manipulação de Files

    async addFile(req, res) {
        const file = new File(req.body.name, req.body.file, req.body.taskid, req.body.reviewid, req.body.projectid);
        this.uService.addFile(file)
        res.json(file)
    }

    async getFile(req, res) {
        const file = await this.uService.getFile(req.body)
        res.json(file)
    }

    async getallFile(req, res) {
        const file = await this.uService.getallFile();
        res.json(file)
    }

    async excluirFile(req, res) {
        await this.uService.excluirFile(req.body.name)
        res.send("Excluido")
    }

    async editFile(req, res) {
        await this.uService.editFile(req.body)
        res.send("Alteração Realizada")
    }


    //Manipulação de Folders

    async addFolder(req, res) {
        const folder = new Folder(req.body.name, req.body.file);
        this.uService.addFolder(folder)
        res.json(folder)
    }

    async getFolder(req, res) {
        const folder = await this.uService.getFolder(req.body)
        res.json(folder)
    }

    async getallFolder(req, res) {
        const folder = await this.uService.getallFolder();
        res.json(folder)
    }

    async excluirFolder(req, res) {
        await this.uService.excluirFolder(req.body.name)
        res.send("Excluido")
    }

    async editFolder(req, res) {
        await this.uService.editFolder(req.body)
        res.send("Alteração Realizada")
    }


    //Manipulação de Review

    async addReview(req, res) {
        const review = new Review(req.body.name, req.body.file, req.body.field, req.body.status);
        this.uService.addReview(review)
        res.json(prreviewojeto)
    }

    async getReview(req, res) {
        const review = await this.uService.getReview(req.body)
        res.json(review)
    }

    async getallReview(req, res) {
        const review = await this.uService.getallReview();
        res.json(review)
    }

    async excluirReview(req, res) {
        await this.uService.excluirReview(req.body.name)
        res.send("Excluido")
    }

    async editReview(req, res) {
        await this.uService.editReview(req.body)
        res.send("Alteração Realizada")
    }


    //Manipulação de Tasks

    async addTask(req, res) {
        const task = new Task(req.body.tipo, req.body.field, req.body.title, req.body.origin, req.body.status, req.body.companyid, req.body.projectid, req.body.assignedto, req.body.description, req.body.deliverydate);
        this.uService.addTask(task)
        res.json(task)
    }

    async getTask(req, res) {
        const task = await this.uService.getTask(req.body)
        res.json(task)
    }

    async getallTask(req, res) {
        const task = await this.uService.getallTask();
        res.json(task)
    }

    async excluirTask(req, res) {
        await this.uService.excluirTask(req.body.title)
        res.send("Excluido")
    }

    async editTask(req, res) {
        await this.uService.editTask(req.body)
        res.send("Alteração Realizada")
    }


}


module.exports = UsuarioController