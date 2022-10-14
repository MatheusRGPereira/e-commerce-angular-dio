import { Component, OnInit } from '@angular/core';
import { GamesService } from '../gamestore/product-list/product-item.component.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  games: any;
  gamesService : GamesService


  constructor(gamesService: GamesService) { 
    this.gamesService = gamesService;
  }

  ngOnInit(): void {
    this.games = this.gamesService.getGameById(this.games.id).subscribe((data =>{

      this.games = data;
      console.log(this.games);
  }))
  }
}

  
