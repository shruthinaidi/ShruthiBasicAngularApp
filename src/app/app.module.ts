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

import { MakejsonPipe } from './makejson.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeService } from './employee.service';
 import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

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
    MakejsonPipe,
    
   

   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
   
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  // providers: [EmployeeService],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
