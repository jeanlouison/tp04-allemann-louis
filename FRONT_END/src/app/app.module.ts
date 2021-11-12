import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductState } from 'src/shared/states/products-state';
import { SharedModule } from './shared-module/shared-module.module';
import { AdresseComponent } from './adresse/adresse.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    FiltersComponent,
    AdresseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'panier', loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) },
      { path: 'client', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
      { path: 'produit/:ref', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) },
      { path: 'catalogue', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) },
      { path: 'adresse', loadChildren: () => import('./adresse/adresse.module').then(m => m.AdresseModule) },
      { path: '', loadChildren: () => import('./catalog/catalog.component').then(m => m.CatalogComponent) },
    ]),
    NgxsModule.forRoot([ProductState], {
      developmentMode: !environment.production
    }),
    SharedModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
