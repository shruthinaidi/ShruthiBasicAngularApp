import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikedComponent } from './liked/liked.component';
import { MostlikedComponent } from './mostliked/mostliked.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RxjsExamplesComponent } from './rxjs-examples/rxjs-examples.component';
import { DislikedComponent } from './disliked/disliked.component';
import { DislikedTransactionHistoryComponent } from './disliked-transaction-history/disliked-transaction-history.component';
import { DislikedTaskComponent } from './disliked-task/disliked-task.component';
import { DislikedProfileComponent } from './disliked-profile/disliked-profile.component';
import { DislikedAddressComponent } from './disliked-address/disliked-address.component';
import { ProductWithApiComponent } from './product-with-api/product-with-api.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetails2Component } from './product-details2/product-details2.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path:"login", component:LoginComponent},
  { path: "liked", component: LikedComponent,canActivate:[AuthGuard]},
  {
    path: "disliked", component: DislikedComponent, children: [
      { path: "", component: DislikedProfileComponent },
      { path: "disliked-profile", component: DislikedProfileComponent },
      { path: "disliked-address", component: DislikedAddressComponent },
      { path: "disliked-transaction-history", component: DislikedTransactionHistoryComponent },
      { path: "disliked-task", component: DislikedTaskComponent },
    ]
  },
  { path: "mostliked", component: MostlikedComponent },
  { path: "employee", component: EmployeeComponent,canActivate:[AuthGuard] },
  { path: "products", component: ProductsComponent },
  {path:"rxjs", component:RxjsExamplesComponent},
  {path:"product-with-api",component:ProductWithApiComponent},
  {path:"product-details/:productId",component:ProductDetailsComponent},
  {path:"product-details2",component:ProductDetails2Component},
  {path:"add-employee",component:AddEmployeeComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"edit-product/:id",component:EditProductComponent},
  {path:"view-product/:id",component:ViewProductComponent},
  { path: "**", component: PageNotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
