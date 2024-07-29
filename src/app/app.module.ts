import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { routes } from './app.routes';
import { RouterModule, ROUTES } from '@angular/router';
import { validateHeaderName } from 'http';
import { Router } from 'express';
import { AuthGuard } from './guards/signin.guard';
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    ToastrModule.forRoot(),
    NgModule,
    FormGroup,
    FormGroupDirective,
    RouterModule.forRoot([
      {
        path:'secured',
        component: SigninComponent,
        pathMatch: 'full',
        canActivate : [AuthGuard]
      }
    ])
  ],
})
export class AppModule { }