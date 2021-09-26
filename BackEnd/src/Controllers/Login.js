'use strict'
const db = require('../DB/config');
// var jwt = require('../services/jwt');
var bcrypt = require('bcrypt');

const Usuario = db.usuario;


function login(req, res) {
    var registro = req.body.registro;
    var password = req.body.password
    console.log("----------------------" + registro)
    Usuario.findOne({ where: { registro: registro } }).then(usuario => {
        // if (err) return res.status(500).send({ message: 'Request error' });
        if (usuario) {
            if (usuario.password == password) {
                return res.status(200).send("ok")
            } else {
                return res.status(404).send({ message: 'Contraseña incorrecta' })
            }

        } else {
            return res.status(404).send({ message: 'Nombre de usuario inexistente' })
        }
    })
}

module.exports = {
    login
}