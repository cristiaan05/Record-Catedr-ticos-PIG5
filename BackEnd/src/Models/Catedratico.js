'use strict'
const db = require('../DB/config');
const sequelize = db.sequelize
module.exports = (sequelize, Sequelize) => {
    const catedratico = sequelize.define('catedratico', {
        Id: {
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING
        }
    }, { timestamps: false }, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    });

    return Usuario;
}