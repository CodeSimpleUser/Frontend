import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup,FormBuilder,FormControl,Validator } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit{

  productAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder,private productService:ProductService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice: ["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }
  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({}, this.productAddForm.value)
      this.productService.add(productModel).subscribe(data=>{

        this.toastrService.success("Product added successfully")
      })
    }else{
      this.toastrService.error("Form is not completed")
    }
  }

}
