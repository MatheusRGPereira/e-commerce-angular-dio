import { Component, Input, OnInit } from '@angular/core';
import { Games } from '../model/games';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  games!: Games;
  constructor() { }

  ngOnInit(): void {
  }

}
