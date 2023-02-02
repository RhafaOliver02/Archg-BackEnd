
const mongoose = require('mongoose');

const UserModel = require("../models/usuario-model");
const ProjetoModel = require("../models/Projeto");
const ClienteoModel = require("../models/Client");
const CompanyModel = require("../models/Company");
const FileModel = require("../models/File");
const FolderModel = require("../models/Folder");
const ReviewModel = require("../models/Review");
const TaskModel = require("../models/Task");

class UsersRepo {

    constructor() {
        this.modelUser = UserModel
        this.modelProjeto = ProjetoModel
        this.modelCliente = ClienteoModel
        this.modelCompany = CompanyModel
        this.modelFile = FileModel
        this.modelFolder = FolderModel
        this.modelReview = ReviewModel
        this.modelTask = TaskModel
    }

    //Apis Projetos

    addProjeto(Projeto) {
        this.modelProjeto.create(Projeto, function (err, suc) {
            if (err) return handleError(err);
            console.log("Projeto Cadastrado!")
        })
    }

    excluirProjeto(email) {
        const query = this.modelProjeto.deleteOne({ email })
        query.exec()
    }

    editProjeto(projeto) {
        const query = { email: projeto.email }
        this.modelProjeto.findOneAndUpdate(query, projeto).exec()

    }

    getProjeto(projeto) {
        const query = this.modelProjeto.find({ name: projeto.name })
        const promise = query.exec()
        return promise;
    }

    getallProjeto() {
        const query = this.modelProjeto.find({})
        const promise = query.exec()
        return promise;
    }



    //Apis Users
    addUser(Users) {
        this.modelUser.create(Users, function (err, suc) {
            if (err) return handleError(err);
            console.log("Usuário Cadastrado!")
        })
    }

    excluirUser(email) {
        const query = this.modelUser.deleteOne({ email })
        query.exec()
    }

    editUser(usuario) {
        const query = { email: usuario.email }
        this.modelUser.findOneAndUpdate(query, usuario).exec()

    }

    getUser(usuario) {
        const query = this.modelUser.find({ nome: usuario.nome })
        const promise = query.exec()
        return promise;
    }

    getallUser() {
        const query = this.modelUser.find({})
        const promise = query.exec()
        return promise;
    }

    //Apis Clientes

    addCliente(Cliente) {
        this.modelCliente.create(Cliente, function (err, suc) {
            if (err) return handleError(err);
            console.log("Cliente Cadastrado!")
        })
    }

    excluirCliente(email) {
        const query = this.modelCliente.deleteOne({ email })
        query.exec()
    }

    editCliente(cliente) {
        const query = { email: cliente.email }
        this.modelCliente.findOneAndUpdate(query, cliente).exec()

    }

    getCliente(cliente) {
        const query = this.modelCliente.find({ email: cliente.email })
        const promise = query.exec()
        return promise;
    }

    getallCliente() {
        const query = this.modelCliente.find({})
        const promise = query.exec()
        return promise;
    }

    //Apis Companys

    addCompany(Company) {
        this.modelCompany.create(Company, function (err, suc) {
            if (err) return handleError(err);
            console.log("Company Cadastrado!")
        })
    }

    excluirCompany(name) {
        const query = this.modelCompany.deleteOne({ name })
        query.exec()
    }

    editCompany(company) {
        const query = { email: company.email }
        this.modelCompany.findOneAndUpdate(query, company).exec()

    }

    getCompany(company) {
        const query = this.modelCompany.find({ name: company.name })
        const promise = query.exec()
        return promise;
    }

    getallCompany() {
        const query = this.modelCompany.find({})
        const promise = query.exec()
        return promise;
    }

    //Apis Files

    addFile(File) {
        this.modelFile.create(File, function (err, suc) {
            if (err) return handleError(err);
            console.log("File Cadastrado!")
        })
    }

    excluirFile(email) {
        const query = this.modelFile.deleteOne({ email })
        query.exec()
    }

    editFile(file) {
        const query = { email: file.email }
        this.modelFile.findOneAndUpdate(query, file).exec()

    }

    getFile(file) {
        const query = this.modelFile.find({ name: file.name })
        const promise = query.exec()
        return promise;
    }

    getallFile() {
        const query = this.modelFile.find({})
        const promise = query.exec()
        return promise;
    }

    //Apis Folders

    addFolder(Folder) {
        this.modelFolder.create(Folder, function (err, suc) {
            if (err) return handleError(err);
            console.log("Folder Cadastrado!")
        })
    }

    excluirFolder(name) {
        const query = this.modelFolder.deleteOne({ name })
        query.exec()
    }

    editFolder(folder) {
        const query = { email: folder.email }
        this.modelFolder.findOneAndUpdate(query, folder).exec()

    }

    getFolder(folder) {
        const query = this.modelFolder.find({ name: folder.name })
        const promise = query.exec()
        return promise;
    }

    getallFolder() {
        const query = this.modelFolder.find({})
        const promise = query.exec()
        return promise;
    }

    //Apis Reviews

    addReview(Review) {
        this.modelReview.create(Review, function (err, suc) {
            if (err) return handleError(err);
            console.log("Review Cadastrado!")
        })
    }

    excluirReview(name) {
        const query = this.modelReview.deleteOne({ name })
        query.exec()
    }

    editReview(review) {
        const query = { email: review.email }
        this.modelReview.findOneAndUpdate(query, review).exec()

    }

    getReview(review) {
        const query = this.modelReview.find({ name: review.name })
        const promise = query.exec()
        return promise;
    }

    getallReview() {
        const query = this.modelReview.find({})
        const promise = query.exec()
        return promise;
    }

    //Apis Tasks

    addTask(Task) {
        this.modelTask.create(Task, function (err, suc) {
            if (err) return handleError(err);
            console.log("Task Cadastrado!")
        })
    }

    excluirTask(title) {
        const query = this.modelTask.deleteOne({ title })
        query.exec()
    }

    editTask(task) {
        const query = { title: task.title }
        this.modelTask.findOneAndUpdate(query, task).exec()

    }

    getTask(tarefa) {
        const query = this.modelTask.find({ title: tarefa.title })
        const promise = query.exec()
        return promise;
    }

    getallTask() {
        const query = this.modelTask.find({})
        const promise = query.exec()
        return promise;
    }
}


module.exports = UsersRepo