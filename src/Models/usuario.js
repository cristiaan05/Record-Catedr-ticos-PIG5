'use strict'
const db = require('../DB/config');
const sequelize = db.sequelize
module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        usuario: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        rol: {
            type: Sequelize.STRING
        },
        empleadoId: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    });

    return Usuario;
}