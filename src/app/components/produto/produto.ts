import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Produto, PRODUTOS } from '../../models/produto.model';

@Component({
  selector: 'app-produto',
  imports: [CommonModule, RouterModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class ProdutoComponent {
  produtos: Produto[] = PRODUTOS;

  comprar(produtoId: number) {
    console.log(`Produto ${produtoId} adicionado ao carrinho`);
  }
}
