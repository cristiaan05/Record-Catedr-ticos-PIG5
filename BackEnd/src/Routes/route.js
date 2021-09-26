'use strict'
var express = require('express');
var login = require('../Controllers/Login');
var registro = require('../Controllers/registroUsuario');
// var EmpleadoController = require('../controllers/empleadoController');
// var SolicitudController = require('../controllers/solicitudController');
// var VacacionesController = require('../controllers/vacacionesController');
// var md_auth = require('../middlewares/autheticated');

var api = express.Router();

//RUTAS 
api.post('/login', login.login);
api.post('/registrarUsuario', registro.registrarUsuario);
api.get('/olvidarcontrasena', registro.olvidarContrasena);
api.put('/nuevacontrasena/:registro', registro.nuevaContrasena);


//-------------RUTA PARA AGRGAR CURSOS------------------------
// api.post('/agregarcurso', registro.llenarCursos);
//---------------------------------------------------------------.



//Exportar ruta
module.exports = api;