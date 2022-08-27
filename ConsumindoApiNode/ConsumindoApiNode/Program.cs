using ConsumindoApiNode.Models;
using Newtonsoft.Json;
using System;
using System.Text;
using System.Net.Http;

namespace ConsumindoApiNode
{
    public class Program
    {
        static void Main(string[] args)
        {
            CadastrarProduto();
            ListarProdutos();
        }

        public static void ListarProdutos()
        {
            string urlApi = "http://localhost:4200/List";

            try
            {
                using (var client = new HttpClient())
                {
                    var resposta = client.GetStringAsync(urlApi);
                    resposta.Wait();

                    var retorno = JsonConvert.DeserializeObject<Produto[]>(resposta.Result).ToList();
                }
            }
            catch(Exception e)
            {
                Console.WriteLine("Erro ao Listar Produto: " + e);
            }
        }

        public static void CadastrarProduto()
        {
            string uprApi = "http://localhost:4200/Create";
            try
            {
                using (var cliente = new HttpClient())
                {
                    var produto = new Produto();
                    produto.Descricao = "Produto - Teste" + DateTime.Now.ToString();
                    produto.DataCriacao = DateTime.Now;

                    //Convertendo o objeto para JSON e passando ele como Post para o client
                    string jsonObjeto = JsonConvert.SerializeObject(produto);

                    //Content que vai no header da requisição
                    var content = new StringContent(jsonObjeto, Encoding.UTF8, "application/json");

                    //Requisição ao Servidor
                    var resposta = cliente.PostAsync(uprApi, content);
                    resposta.Wait();

                    if (resposta.Result.IsSuccessStatusCode)
                    {
                        var retorno = resposta.Result.Content.ReadAsStringAsync();

                        var produtoCriado = JsonConvert.DeserializeObject<Produto>(retorno.Result);
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Erro ao Cadastrar Produto: " + e);
            }
        }

    }

}