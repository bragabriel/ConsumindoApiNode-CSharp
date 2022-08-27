const express = require('express');

const controllerProduto = require('./controllers/ProdutoController');

const routes = express.Router();

routes.get('/List', controllerProduto.List);

routes.post('/Create', controllerProduto.Create);

routes.put('/Update/:id', controllerProduto.Update);

routes.get('/GetOne', controllerProduto.GetOne);

routes.delete('/Delete/:id', controllerProduto.Delete);

module.exports = routes;