import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Produto, PRODUTOS } from '../../models/produto.model';

@Component({
  selector: 'app-produto-detalhe',
  imports: [CommonModule],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css',
})
export class ProdutoDetalheComponent implements OnInit {
  produtoId: number | null = null;
  produto: Produto | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.produtoId = +params['id'];
      this.produto = PRODUTOS.find(p => p.id === this.produtoId) || null;
    });
  }

  comprar() {
    if (this.produto && this.produto.emEstoque) {
      alert(`${this.produto.nome} foi adicionado ao carrinho!`);
    }
  }
}
