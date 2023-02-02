// const mongoose = require("mongoose")

// class UsersRepo1{

//     constructor(){
//         this.usuarios = [] 
//     }

//     add(usuario){
//         this.usuarios.push(usuario)

//     }

//     excluir(email){
//         let i = this.usuarios.findIndex((o) => o.email == email)
//         this.usuarios.splice(i, 1)
//     }

//     edit(usuario){
//         this.usuarios.forEach((o) => {
//             if(o.email == usuario.email){
//                 o.senha = usuario.senha ? usuario.senha : o.senha
//                 o.nome = usuario.nome ? usuario.nome : o.nome
//             }
//         })
//     }

//     get(email){
//         let i = this.usuarios.findIndex((o) => o.email == email)
//         this.usuarios.splice(i, 1)
//     }

//     getall(){
//         return this.usuarios;
//     }
// }


// //module.exports = UsersRepo1