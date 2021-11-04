import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/shared/models/produit';
import { ShopDataService } from '../shop-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private productRef?: string = '';
  private product?: Produit = new Produit();

  constructor(private activatedRoute:ActivatedRoute,
              private shopDataService:ShopDataService) { }

  ngOnInit(): void {

    this.productRef = this.activatedRoute.snapshot.paramMap.get("ref")!;
    this.shopDataService.getProductByRef(this.productRef)
    .then(p => this.product = p);
  }

}
