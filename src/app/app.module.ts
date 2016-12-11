import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import './rxjs-extensions';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';

// components
import { PageProductsComponent } from './page-products';
import { PageProductComponent } from './page-product';
import { PageProductAddComponent } from './page-product-add';
import { PageCartComponent } from './page-cart';
import { Page404Component } from './page-404';

// shared components
import { ProductCardComponent, ProductAddFormComponent, 
  PaymentFormComponent } from './shared/components';

// services
import {
  ProductService, ProductImplService,
  CartService
} from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    PageProductsComponent,
    PageProductComponent,
    PageProductAddComponent,
    PageCartComponent,
    Page404Component,
    // shared
    ProductCardComponent,
    ProductAddFormComponent,
    PaymentFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    // ProductService,
    { provide: ProductService, useClass: environment.env === 'stage' ? ProductService : ProductImplService },
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
