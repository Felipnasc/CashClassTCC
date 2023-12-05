const sequelize = require('sequelize');

const connection = new sequelize(
    'api',
    'root',
    'CadeiraSenhaRoot321!',
    {
        host:'localhost',
        port:'3306',
        dialect:'mysql',
        timezone:'-03:00'
    }
);

// connection.authenticate().then(() =>{ 
//     console.log("Conexão bem sucedida")
// }).catch((err) =>{ 
//     console.log("Erro na conexão", err)
// })


module.exports = connection;