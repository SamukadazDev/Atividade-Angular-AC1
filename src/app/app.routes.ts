import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProdutoComponent } from './components/produto/produto';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe';
import { SobreComponent } from './components/sobre/sobre';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
