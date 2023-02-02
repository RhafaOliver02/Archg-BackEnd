const mongoose = require("mongoose")

class ManageDB {

    static async connect() {
        await mongoose.connect('mongodb+srv://RhafaOliver02:fabyRafa02@cluster0.gjyo367.mongodb.net/archg?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => (
                console.log(console, `Erro na Conexão ${err}`)
            ));

        console.log('Conectado no MongoDB')
    }

    static async Close() {
        await mongoose.connection.close().catch(err => {
            console.log(`Erro ao Fechar o Banco ${err}`)
        })

        console.log("Banco Fechado com Sucesso")

    }
}

module.exports = ManageDB