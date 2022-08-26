const ModelProduto = require('../models/produto');

//Criando a API na Controller

module.exports = {

    //Método - Read
    async List(req, res){
        try {
            const produtos = await ModelProduto.findAll();
            return res.json(produtos)
        } catch (error) {
            return console.error("Erro na List", error);            
        }
    },

    //Método - Create
    async Create(req, res){
        try {
            const produtos = await ModelProduto.create(
                {
                    //parametros de entrada
                    Codigo: req.body.Codigo, 
                    Descricao: req.body.Descricao,
                    DataCriacao: req.body.DataCriacao,
                    DataAtualizacao: null
                }
            );
            return res.json(produtos)
        } catch (error) {
            return console.error("Erro no Create", error);            
        }
    },

    //Método - Update
    async Update(req, res){
        try {
            const prod = await ModelProduto.findByPk(req.body.Codigo); //procurando a chave primária

            if(prod){
                //Se existe a chave primária
                prod.Descricao = req.body.Descricao,
                prod.DataAtualizacao = req.body.DataAtualizacao;
                await prod.save();
            }

            return res.json(prod)//Se conseguiu salvar e alterar, retornamos o novo produto

        } catch (error) {
            return console.error("Erro no Update", error);            
        }
    },

    //Método - Get One
    async GetOne(req, res){
        try {
            const prod = await ModelProduto.findByPk(req.body.Codigo); //procurando a chave primária

            return res.json(prod)//Se conseguiu salvar e alterar, retornamos o novo produto
            
        } catch (error) {
            return console.error("Erro no Update", error);            
        }
    },

    //Método - Delete
    async Delete(req, res){
        try {
            const prod = await ModelProduto.findByPk(req.body.Codigo); //procurando a chave primária

            await prod.destroy()//Deletando o produto do DB

            return res.json(prod)//Se conseguiu salvar e alterar, retornamos o novo produto
            
        } catch (error) {
            return console.error("Erro no Update", error);            
        }
    }


}