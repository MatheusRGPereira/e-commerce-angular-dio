import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CadastroComponent } from "./component/cadastro/cadastro.component";
import { CadastronovasenhaComponent } from "./component/cadastronovasenha/cadastronovasenha.component";
import { CarrinhoComponent } from "./component/carrinho/carrinho.component";
import { ConfirmacadastroComponent } from "./component/confirmacadastro/confirmacadastro.component";
import { ConfirmacadastrosenhaComponent } from "./component/confirmacadastrosenha/confirmacadastrosenha.component";
import { ConfirmacontatoComponent } from "./component/confirmacontato/confirmacontato.component";
import { ConfirmarecupsenhaComponent } from "./component/confirmarecupsenha/confirmarecupsenha.component";
import { ContatoComponent } from "./component/contato/contato.component";
import { GamestoreAppComponent } from "./component/gamestore-app/gamestore-app.component";
import { LoginComponent } from "./component/login/login.component";
import { PrivacidadeComponent } from "./component/privacidade/privacidade.component";
import { QuemsomosComponent } from "./component/quemsomos/quemsomos.component";
import { RecuperarsenhaComponent } from "./component/recuperarsenha/recuperarsenha.component";
import { TermosComponent } from "./component/termos/termos.component";
import { TrocasComponent } from "./component/trocas/trocas.component";

const routes: Routes = [
  {path:'cadastro', component: CadastroComponent},
  {path:'cadastronovasenha', component: CadastronovasenhaComponent},
  {path:'carrinho', component: CarrinhoComponent},
  {path:'confirmacadastro', component: ConfirmacadastroComponent},
  {path:'confirmacadastrosenha', component: ConfirmacadastrosenhaComponent},
  {path:'confirmacontato', component: ConfirmacontatoComponent},
  {path:'confirmarecupsenha', component: ConfirmarecupsenhaComponent },
  {path:'contato', component:ContatoComponent },
  {path:'gamestore', component:GamestoreAppComponent },
  {path:'gamestore-app', component:GamestoreAppComponent  },
  {path:'privacidade', component: PrivacidadeComponent},
  {path:'quemsomos', component:QuemsomosComponent },
  {path:'recuperarsenha', component:RecuperarsenhaComponent },
  {path:'termos', component:TermosComponent },
  {path:'trocas', component: TrocasComponent},
  {path:'login', component: LoginComponent},
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
