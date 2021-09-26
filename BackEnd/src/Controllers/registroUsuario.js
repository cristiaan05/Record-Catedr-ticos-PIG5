'use strict'
var db = require('../DB/config');
var bcrypt = require('bcrypt');
const Curso = db.curso;
const Catedratico = db.catedratico;
const Op = db.Sequelize.Op;
const Usuario = db.usuario;

//Registar un usuario nuevo
function registrarUsuario(req, res) {
    var params = req.body
    var registro = params.registro;
    var nombre = params.nombre;
    var apellido = params.apellido;
    var password = params.password;
    var email = params.email;
    var creditos = params.creditos;
    //Verify if user exist
    if (registro && nombre && apellido && password && email) {
        Usuario.findOne({
            where: {
                registro: registro
            }
        }).then(usuario => {
            if (usuario) {
                console.log(usuario + "afasdf")
                return res.status(500).send('Este usrio ya esta registrado');
            } else {
                Usuario.create({
                    registro: registro,
                    nombres: nombre,
                    apellidos: apellido,
                    password: password,
                    email: email
                }).then(empleado => {
                    res.status(200).send(empleado);
                }).catch(err => console.log(err));
            }
        })
    } else {
        return res.status(500).send('Rellene todos los campos');
    }
}


function olvidarContrasena(req, res) {
    var params = req.body
    var registro = params.registro;
    var email = params.email;
    //Verify if user exist
    if (registro && email) {
        Usuario.findOne({
            where: {
                [Op.and]: [
                    { registro: registro },
                    { email: email }
                ]
            }
        }).then(usuario => {
            if (usuario) {
                console.log(usuario)
                    //Confirmamos que los datos son correctos y el usuario existe
                return res.status(200).send('Datos validos')
            } else {
                return res.status(500).send('Este usuario no existe');
            }
        })
    } else {
        return res.status(500).send('Rellene todos los campos');
    }
}

function nuevaContrasena(req, res) {
    var registro = req.params.registro
    var password = req.body.password;
    var confpass = req.body.confpass;
    if (password === confpass) {
        Usuario.findOne({
            where: {
                registro: registro
            }
        }).then(usuario => {
            if (usuario) {
                Usuario.update({
                    password: password
                }, {
                    where: {
                        registro: registro
                    }
                }).then(() => {
                    return res.status(200).send('Cambio de contrasena exitoso')
                });
            } else {
                return res.status(500).send('Este usuario no existe');
            }
        })
    } else {
        return res.status(500).send('Las contrasenasno coinciden');
    }

}


// -------------------------CODIGO PARA INGRESAR LOS CURSOS AL SISTEMAS----------------------------------------
// function llenarCursos(req, res) {
//     var params = req.body
//     var id = params.id;
//     var nombre = params.nombre;
//     var creditos = params.creditos;
//     //Verify if user exist
//     if (id && nombre) {
//         Curso.create({
//             id: id,
//             nombre: nombre,
//             creditos: creditos
//         }).then(curso => {
//             res.status(200).send(curso);
//         }).catch(err => console.log(err));
//     } else {
//         return res.status(500).send('Rellene todos los campos');
//     }
// }


// -------------------------CODIGO PARA INGRESAR LOS CATEDRATICOS  AL SISTEMAS----------------------------------------
function lenarCat(req, res) {
    var params = req.body
    var nombre = params.nombre;
    //Verify if user exist
    if (id && nombre) {
        Catedratico.create({
            nombre: nombre
        }).then(cate => {
            res.status(200).send(cate);
        }).catch(err => console.log(err));
    } else {
        return res.status(500).send('Rellene todos los campos');
    }
}




module.exports = {
    registrarUsuario,
    olvidarContrasena,
    nuevaContrasena
    // llenarCursos
}