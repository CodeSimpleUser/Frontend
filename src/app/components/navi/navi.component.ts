import { Component } from '@angular/core';
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";

@Component({
    selector: 'app-navi',
    standalone: true,
    templateUrl: './navi.component.html',
    styleUrl: './navi.component.css',
    imports: [CartSummaryComponent]
})
export class NaviComponent {

}
