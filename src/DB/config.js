'use strict'
const env = require('./credeciales');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    port: env.port,
    dialect: env.dialect,
    operatorsAliases: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',

    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// //Models/tables
db.usuario = require('../models/usuario')(sequelize, Sequelize);
// db.empleado = require('../models/empleado')(sequelize, Sequelize);
// db.solicitud = require('../models/solicitud')(sequelize, Sequelize);
// db.vacaciones = require('../models/vacaciones')(sequelize, Sequelize);

// db.empleado.hasMany(db.solicitud)
// db.empleado.hasOne(db.usuario)
// db.solicitud.belongsTo(db.empleado)
// db.empleado.hasMany(db.vacaciones)
// db.vacaciones.belongsTo(db.empleado)

// let aws_keys = {
//     // s3: {
//     //     region: 'us-east-2',
//     //     accessKeyId: "",
//     //     secretAccessKey: "",
//     //     //apiVersion: '2006-03-01',
//     // },
//     dynamodb: {
//         apiVersion: '2021-09-11',
//         region: 'us-west-2',
//         accessKeyId: "AKIAX4TB5DVYSZELS2IL",
//         secretAccessKey: "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"
//             // },
//             // rekognition: {
//             //     region: '',
//             //     accessKeyId: "",
//             //     secretAccessKey: ""
//             // },
//             // translate: {
//             //     region: '',
//             //     accessKeyId: "",
//             //     secretAccessKey: ""
//             // },
//             // cognito: {
//             //     UserPoolId: '',
//             //     ClientId: ''
//             // }
//     }
// }
// module.exports = aws_keys



module.exports = db;