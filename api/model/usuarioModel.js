const sequelize  = require('sequelize');

const connection = require('../database/database');

const usuario = connection.define(
    'tbl_usuario',
    {
        email:{
            type: sequelize.STRING,
            allowNull: false
        },
        senha:{
            type: sequelize.STRING,
            allowNull: false
        },
        atividade_presente:{
            type: sequelize.INTEGER,
            defaultValue: 1
        }
    },
    {
        timestamps: false
    }
);

// usuario.sync({force:true});


module.exports = usuario;

