const express = require('express');

const controllerProduto = require('./controllers/ProdutoController');

const routes = express.Router();

routes.get('/List', controllerProduto.List);

routes.post('/Create', controllerProduto.Create);

routes.put('/Update', controllerProduto.Update);

routes.get('/GetOne', controllerProduto.GetOne);

routes.get('/Delete', controllerProduto.Delete);

module.exports = routes;