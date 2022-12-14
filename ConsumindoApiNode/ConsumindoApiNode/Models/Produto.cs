using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsumindoApiNode.Models
{
    public class Produto
    {
        public int Codigo { get; set; }
        public string? Descricao { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime? DataAtualizacao { get; set; } //Sinal de interrogação = Aceita valores nullos
    }
}
