'use strict'
const db = require('../DB/config');
const sequelize = db.sequelize
module.exports = (sequelize, Sequelize) => {
    const curso_Cat = sequelize.define('curso_Cat', {
        Id: {
            type: Sequelize.INTEGER
        },
        idCurso: {
            type: Sequelize.INTEGER
        },
        idCatedratico: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    });

    return Usuario;
}