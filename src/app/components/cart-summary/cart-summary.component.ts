import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { ToastrModule, ToastrService ,} from 'ngx-toastr';


@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule,ToastrModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit{

  carItems:CartItem[] = [];
    
  constructor(private cartService:CartService,private toastrService:ToastrService) { }
  
  ngOnInit(): void {
    this.getCart();
  }
  getCart() {
    this.carItems = this.cartService.list();
  }
  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.toastrService.error("Deleted",product.productName + "removed from basket");
  }
}
