'use strict'
const db = require('../DB/config');
const sequelize = db.sequelize
module.exports = (sequelize, Sequelize) => {
    const curso = sequelize.define('curso', {
        id: {
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING
        },
        creditos: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    });

    return Usuario;
}