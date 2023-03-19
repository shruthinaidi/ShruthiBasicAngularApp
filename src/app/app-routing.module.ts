import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DislikedAddressComponent } from './pages/disliked-address/disliked-address.component';
import { DislikedProfileComponent } from './pages/disliked-profile/disliked-profile.component';
import { DislikedTaskComponent } from './pages/disliked-task/disliked-task.component';
import { DislikedTransactionHistoryComponent } from './pages/disliked-transaction-history/disliked-transaction-history.component';
import { DislikedComponent } from './pages/disliked/disliked.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LikedComponent } from './pages/liked/liked.component';
import { LoginComponent } from './pages/login/login.component';
import { MostlikedComponent } from './pages/mostliked/mostliked.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductDetails2Component } from './pages/product-details2/product-details2.component';
import { ProductWithApiComponent } from './pages/product-with-api/product-with-api.component';
import { ProductsComponent } from './pages/products/products.component';
import { RxjsExamplesComponent } from './pages/rxjs-examples/rxjs-examples.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { UsersResolver } from './resolver/users.resolver';



const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path:"login", component:LoginComponent},
  { path: "liked", component: LikedComponent, resolve:{listOfUser:UsersResolver},canActivate:[AuthGuard]},
  {
    path: "disliked", component: DislikedComponent,canActivate:[AuthGuard], children: [
      { path: "", component: DislikedProfileComponent },
      { path: "disliked-profile", component: DislikedProfileComponent},
      { path: "disliked-address", component: DislikedAddressComponent},
      { path: "disliked-transaction-history", component: DislikedTransactionHistoryComponent },
      { path: "disliked-task", component: DislikedTaskComponent },
    ]
  },
  { path: "mostliked", component: MostlikedComponent,canActivate:[AuthGuard] },
  { path: "employee", component: EmployeeComponent,canActivate:[AuthGuard] },
  { path: "products", component: ProductsComponent,canActivate:[AuthGuard] },
  {path:"rxjs", component:RxjsExamplesComponent,canActivate:[AuthGuard]},
  {path:"rxjs", component:RxjsExamplesComponent,canActivate:[AuthGuard]},
  {path:"product-with-api",component:ProductWithApiComponent,canActivate:[AuthGuard]},
  {path:"product-details/:productId",component:ProductDetailsComponent,canActivate:[AuthGuard]},
  {path:"product-details2",component:ProductDetails2Component,canActivate:[AuthGuard]},
  {path:"add-employee",component:AddEmployeeComponent,canActivate:[AuthGuard]},
  {path:"add-product",component:AddProductComponent,canActivate:[AuthGuard]},
  {path:"edit-product/:id",component:EditProductComponent,canActivate:[AuthGuard]},
  {path:"view-product/:id",component:ViewProductComponent,canActivate:[AuthGuard]},
  { path: 'customers', loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'feature-users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
   { path: "**", component: PageNotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
