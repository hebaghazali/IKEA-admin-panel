import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/Products/AllProducts', pathMatch: 'full' },

  { path: 'AllProducts', component: ProductsComponent },
  { path: 'ProductForm', component: ProductFormComponent },
  { path: 'UpdateProduct/:id', component: EditProductComponent },
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent,
    DropDownListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes),MaterialModule,FormsModule],
})
export class ProductsModule {}
