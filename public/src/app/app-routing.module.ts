import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent, children: [

    ]} ,
    { path: 'new', component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
