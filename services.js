const UsersRepos = require("./Repositories/Users_repo")

const UsersRepo = require("./Repositories/Users_API")

class UsersRepoApi{

    constructor(){
        this.repoUser = new UsersRepo() 
    }

    //Services Projetos
    addProjeto(Projeto){
        this.repoUser.addProjeto(Projeto)
    }

    getProjeto(usuario){
        return this.repoUser.getProjeto(usuario);
    }

    getallProjeto(){
        return this.repoUser.getallProjeto();
    }

    excluirProjeto(email){
        this.repoUser.excluirProjeto(email)
    }

    editProjeto(usuario){
        this.repoUser.editProjeto(usuario)
    }

    //Services Users
    addUser(Users){
        this.repoUser.addUser(Users)
    }

    excluirUser(email){
        this.repoUser.excluirUser(email)
    }

    editUser(usuario){
        this.repoUser.editUser(usuario)
    }

    getUser(usuario){
        return this.repoUser.getUser(usuario);
    }

    getallUser(){
        return this.repoUser.getallUser();
    }

    //Services Clientes
    addCliente(Cliente){
        this.repoUser.addCliente(Cliente)
    }

    getCliente(usuario){
        return this.repoUser.getCliente(usuario);
    }

    getallCliente(){
        return this.repoUser.getallCliente();
    }

    excluirCliente(email){
        this.repoUser.excluirCliente(email)
    }

    editCliente(usuario){
        this.repoUser.editCliente(usuario)
    }

    //Services Companys
    addCompany(Company){
        this.repoUser.addCompany(Company)
    }

    getCompany(usuario){
        return this.repoUser.getCompany(usuario);
    }

    getallCompany(){
        return this.repoUser.getallCompany();
    }

    excluirCompany(email){
        this.repoUser.excluirCompany(email)
    }

    editCompany(usuario){
        this.repoUser.editCompany(usuario)
    }

    //Services Files
    addFile(File){
        this.repoUser.addFile(File)
    }

    getFile(usuario){
        return this.repoUser.getFile(usuario);
    }

    getallFile(){
        return this.repoUser.getallFile();
    }

    excluirFile(email){
        this.repoUser.excluirFile(email)
    }

    editFile(usuario){
        this.repoUser.editFile(usuario)
    }

    //Services Folders
    addFolder(Folder){
        this.repoUser.addFolder(Folder)
    }

    getFolder(usuario){
        return this.repoUser.getFolder(usuario);
    }

    getallFolder(){
        return this.repoUser.getallFolder();
    }

    excluirFolder(email){
        this.repoUser.excluirFolder(email)
    }

    editFolder(usuario){
        this.repoUser.editFolder(usuario)
    }

    //Services Reviewa
    addReview(Review){
        this.repoUser.addReview(Review)
    }

    getReview(usuario){
        return this.repoUser.getReview(usuario);
    }

    getallReview(){
        return this.repoUser.getallReview();
    }

    excluirReview(email){
        this.repoUser.excluirReview(email)
    }

    editReview(usuario){
        this.repoUser.editReview(usuario)
    }

    //Services Tasks
    addTask(Task){
        this.repoUser.addTask(Task)
    }

    getTask(title){
        return this.repoUser.getTask(title);
    }

    getallTask(){
        return this.repoUser.getallTask();
    }

    excluirTask(email){
        this.repoUser.excluirTask(email)
    }

    editTask(usuario){
        this.repoUser.editTask(usuario)
    }
}


module.exports = UsersRepoApi
