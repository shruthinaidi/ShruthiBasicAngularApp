import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikedComponent } from './liked/liked.component';
import { MostlikedComponent } from './mostliked/mostliked.component';
import { DislikedComponent } from './disliked/disliked.component';
import { DislikedProfileComponent } from './disliked-profile/disliked-profile.component';
import { DislikedAddressComponent } from './disliked-address/disliked-address.component';
import { DislikedTransactionHistoryComponent } from './disliked-transaction-history/disliked-transaction-history.component';
import { DislikedTaskComponent } from './disliked-task/disliked-task.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LikedComponent,
    MostlikedComponent,
    DislikedComponent,
    DislikedProfileComponent,
    DislikedAddressComponent,
    DislikedTransactionHistoryComponent,
    DislikedTaskComponent,
    HeaderComponent,
    EmployeeComponent,
    ProductsComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
