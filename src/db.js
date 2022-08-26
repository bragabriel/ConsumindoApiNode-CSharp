const sequelize = require('sequelize');

const database = new sequelize('basenode', 'root', '1234',
{
    dialect:'mysql', //Qual banco estamos utilizando
    host:'localhost',
    port:'3306',
});

database.sync();

module.exports = database;