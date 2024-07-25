import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

export const routes: Routes = [
    {path:"products/",pathMatch:'full', component:ProductComponent},
    {path:"products/getall",component:ProductComponent},
    {path:"products/category/:categoryId",component:ProductComponent},
    {path:"products/add",component:ProductAddComponent}
];
