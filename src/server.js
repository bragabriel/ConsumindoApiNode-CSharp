const express = require('express');

const api = express();

const routes = require('./router');

//Iniciando o servidor Node (API)
api.use(express.json());
api.use(routes)
api.listen(4200);