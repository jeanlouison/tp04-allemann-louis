import { Component, OnInit } from '@angular/core';
import { ProductState } from 'src/shared/states/products-state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Select(ProductState.getNbProduits)
  numberProductsInCart$!: Observable<number>;

  constructor() {}

  ngOnInit(): void {

  }

}
