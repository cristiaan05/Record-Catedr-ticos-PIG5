'use strict'
const db = require('../DB/config');
const sequelize = db.sequelize
module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        registro: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        nombres: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellidos: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        creditos: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    }, { timestamps: false }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    });

    return Usuario;
}