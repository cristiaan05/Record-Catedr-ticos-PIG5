'use strict'
const db = require('../DB/config');
const sequelize = db.sequelize
module.exports = (sequelize, Sequelize) => {
    const publicacion = sequelize.define('publicacion', {
        IdPublicacion: {
            type: Sequelize.INTEGER
        },
        usuario: {
            type: Sequelize.INTEGER
        },
        curso_cat: {
            type: Sequelize.INTEGER
        },
        mensaje: {
            type: Sequelize.STRING
        }
    }, { timestamps: false }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    });

    return publicacion;
}