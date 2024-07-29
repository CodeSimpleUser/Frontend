import { Component } from '@angular/core';
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";
import { ProductAddComponent } from "../product-add/product-add.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from 'express';

@Component({
    selector: 'app-navi',
    standalone: true,
    templateUrl: './navi.component.html',
    styleUrl: './navi.component.css',   
    imports: [CartSummaryComponent, ProductAddComponent,RouterLink]
})
export class NaviComponent {

}
