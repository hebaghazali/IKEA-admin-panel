import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'', redirectTo: '/Products/AllProducts', pathMatch:'full'},
  {path:'AllProducts', component: ProductsComponent},
  {path: 'ProductForm', component:ProductFormComponent}
]


@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }