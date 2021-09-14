'use strict'
// let credenciales = {
//     host: "practicasinicialesg5-instancia.ciejplh0obkq.us-west-2.rds.amazonaws.com",
//     port: 3306,
//     user: "g5_admin",
//     password: "admin123",
//     database: "RecordCatedraticos"
// }
// module.exports = db_credentials;

const env = {
    database: 'RecordCatedraticos',
    username: 'g5_admin',
    password: 'admin123',
    host: 'practicasinicialesg5-instancia.ciejplh0obkq.us-west-2.rds.amazonaws.com',
    port: '3306',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
module.exports = env;