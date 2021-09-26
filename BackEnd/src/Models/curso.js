'use strict'
const db = require('../DB/config');
const sequelize = db.sequelize
module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define('curso', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
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

    return Curso;
}