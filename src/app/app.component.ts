import { ApplicationConfig, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { CategoryComponent } from "./components/category/category.component";
import { ProductComponent } from "./components/product/product.component";
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CategoryComponent, NaviComponent, ProductComponent,RouterOutlet,HttpClientModule,CommonModule]
})
export class AppComponent {
  title = 'northwind';
  user = 'Mehmet Emin Admin';



}