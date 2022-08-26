const sequelize = require('sequelize');

const database = new sequelize('BaseNode', 'root', '1234',
{
    dialect:'mssql', //Qual banco estamos utilizando
    host:'localhost',
    port:'3306',
});

database.sync();

module.exports = database;