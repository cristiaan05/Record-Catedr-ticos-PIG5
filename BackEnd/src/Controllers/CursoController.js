'use strict'
var db = require('../DB/config');
var bcrypt = require('bcrypt');
const Curso = db.curso;
const Op = db.Sequelize.Op;

function filtrarCurso(req, res) {
    var id = req.body.empleadoId
    Curso.findAll({ where: { id: id }, include: [Empleado] }).then(solicitudes => {
        res.status(200).send(solicitudes)
    })
}