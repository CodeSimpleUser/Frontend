import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { VatAddedPipe } from "../../pipes/vat-added.pipe";
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import {  ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [CommonModule, VatAddedPipe,FormsModule, FilterPipePipe,FormsModule
    ]
})
export class ProductComponent implements OnInit{

  products:Product[] = [];
  dataLoaded = false;
  filterText="";

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService,private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }
      else{
        this.getProducts()
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    })
  }
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    })
  }
  addToCart(product:Product){
    if(product.productId===1){
      this.toastrService.error("Error","This product is exceptional");
    }else{
      this.toastrService.success("Added to the cart",product.productName);
      this.cartService.addToCart(product);
    }
  }
}