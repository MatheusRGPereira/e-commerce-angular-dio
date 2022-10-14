import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { GamestoreAppComponent } from './component/gamestore-app/gamestore-app.component';
import { FiltersComponent } from './component/gamestore-app/filters/filters.component';
import { ProductListComponent } from './component/gamestore/product-list/product-list.component'; 
import { ProductItemComponent } from './component/gamestore/product-list/product-item/product-item.component';
import { GamesService } from './component/gamestore/product-list/product-item.component.service';
import { HttpClientModule } from '@angular/common/http';
import { TermosComponent } from './component/termos/termos.component';
import { QuemsomosComponent } from './component/quemsomos/quemsomos.component';
import { TrocasComponent } from './component/trocas/trocas.component';
import { PrivacidadeComponent } from './component/privacidade/privacidade.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { ConfirmacadastroComponent } from './component/confirmacadastro/confirmacadastro.component';
import { ContatoComponent } from './component/contato/contato.component';
import { ConfirmacontatoComponent } from './component/confirmacontato/confirmacontato.component';
import { LoginComponent } from './component/login/login.component';
import { RecuperarsenhaComponent } from './component/recuperarsenha/recuperarsenha.component';
import { ConfirmarecupsenhaComponent } from './component/confirmarecupsenha/confirmarecupsenha.component';
import { CadastronovasenhaComponent } from './component/cadastronovasenha/cadastronovasenha.component';
import { ConfirmacadastrosenhaComponent } from './component/confirmacadastrosenha/confirmacadastrosenha.component';
import { CarrinhoComponent } from './component/carrinho/carrinho.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    GamestoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    TermosComponent,
    QuemsomosComponent,
    TrocasComponent,
    PrivacidadeComponent,
    CadastroComponent,
    ConfirmacadastroComponent,
    ContatoComponent,
    ConfirmacontatoComponent,
    LoginComponent,
    RecuperarsenhaComponent,
    ConfirmarecupsenhaComponent,
    CadastronovasenhaComponent,
    ConfirmacadastrosenhaComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
