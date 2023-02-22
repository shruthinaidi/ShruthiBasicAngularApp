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


const routes: Routes = [
  { path: "", redirectTo: "liked", pathMatch: "full" },
  { path: "liked", component: LikedComponent },
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
  { path: "employee", component: EmployeeComponent },
  { path: "products", component: ProductsComponent },
  {path:"rxjs", component:RxjsExamplesComponent},
  { path: "**", component: PageNotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
