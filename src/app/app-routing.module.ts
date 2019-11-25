import { FazerLoginComponent } from './fazer-login/fazer-login.component';
import { AgendaComponent } from './agenda/agenda.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'fazerlogin', component: FazerLoginComponent },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
