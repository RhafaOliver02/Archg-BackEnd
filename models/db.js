const Sequelize = require('sequelize');

const sequelize = new Sequelize("archg", "root", "fabyRafa02", {
    host: 'localhost',
    dialect: "mysql"
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão OK!")
}).catch(function(){
    console.log("Conexão NOK!")
});


module.exports = sequelize;