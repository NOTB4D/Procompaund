import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:FirstComponent},
  {path:"about",component:AboutComponent},
  {path:"product",component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
