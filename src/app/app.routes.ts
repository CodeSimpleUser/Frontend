import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './guards/signin.guard';
import { SignOutComponent } from './components/sign-out/sign-out.component';

export const routes: Routes = [
    {path:"",pathMatch:'full', component:ProductComponent},
    {path:"products/getall",component:ProductComponent, canActivate:[AuthGuard]},
    {path:"products/category/:categoryId",component:ProductComponent},
    {path:"products/add",component:ProductAddComponent, canActivate:[AuthGuard]},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"signin",component:SigninComponent},   
    {path:"user",component:UserComponent} ,
    {path:"signout",component:SignOutComponent}
];

