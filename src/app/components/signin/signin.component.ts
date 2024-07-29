import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { ServerResponse } from 'http';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
 
    signForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private router:Router,
    private cookieService:CookieService,
  ) { }

  ngOnInit(): void {    
        this.cookieService.deleteAll();
        this.createSignForm();
    }
    
    createSignForm() {
        this.signForm = this.formBuilder.group({
            email: ["",Validators.required],
            password:["",Validators.required]
        })
    }
    signIn() {
        if(this.signForm.valid){
            console.log(this.signForm.value)
            let loginModel = Object.assign({},this.signForm.value)
            this.authService.SignIn(loginModel)
            .subscribe(response=>{
            })
        }
    }
}
