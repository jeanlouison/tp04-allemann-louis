import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ShopComponent } from './shop/shop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TelephonePipe } from './pipes/telephone';
import { RecapComponent } from './recap/recap.component';
import { ValidateDirective } from './validate.directive';
import { CatalogComponent } from './catalog/catalog.component';
import { FiltersComponent } from './filters/filters.component';
import { HttpClientModule } from '@angular/common/http';
import { PrixPipe } from './prix.pipe';
import { environment } from 'src/environments/environment';
import { PanierComponent } from './panier/panier.component';
import { ProductState } from 'src/shared/states/products-state';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    CatalogComponent,
    FiltersComponent,
    TelephonePipe,
    RecapComponent,
    ValidateDirective,
    PrixPipe,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'compte', component: FormComponent},
      {path: 'boutique', component: CatalogComponent},
      {path: 'panier', component: PanierComponent},
    ]),
    NgxsModule.forRoot([ProductState], {
      developmentMode: !environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
