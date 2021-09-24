'use strict'
const db = require('../DB/config');
const sequelize = db.sequelize
module.exports = (sequelize, Sequelize) => {
    const cursosAprobados = sequelize.define('cursosAprobados', {
        IdCursoAprobado: {
            type: Sequelize.INTEGER
        },
        IdCurso: {
            type: Sequelize.INTEGER
        },
        idUsuario: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    });

    return cursosAprobados;
}