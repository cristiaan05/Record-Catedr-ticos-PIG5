'use strict'
const db = require('../DB/config');
const sequelize = db.sequelize
module.exports = (sequelize, Sequelize) => {
    const comentario = sequelize.define('comentario', {
        IdComentario: {
            type: Sequelize.INTEGER
        },
        idPublicacion: {
            type: Sequelize.INTEGER
        },
        mensaje: {
            type: Sequelize.STRING
        },
        usuario: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    });

    return comentario;
}