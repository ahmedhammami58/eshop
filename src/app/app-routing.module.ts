import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { ProductsComponentComponent } from './product-module/products-component/products-component.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';

const routes: Routes = [
  {path : 'home' , component : HomeComponentComponent},
  {path : '' , redirectTo : '/home' , pathMatch: 'full'},
  {path : 'products/categories/:id' , component : ProductsCategoryComponentComponent },
  {path : '**' , component : NotFoundPageComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
