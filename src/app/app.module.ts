import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LikedComponent } from './pages/liked/liked.component';
import { MostlikedComponent } from './pages/mostliked/mostliked.component';
import { DislikedComponent } from './pages/disliked/disliked.component';
import { DislikedProfileComponent } from './pages/disliked-profile/disliked-profile.component';
import { DislikedAddressComponent } from './pages/disliked-address/disliked-address.component';
import { DislikedTransactionHistoryComponent } from './pages/disliked-transaction-history/disliked-transaction-history.component';
import { DislikedTaskComponent } from './pages/disliked-task/disliked-task.component';
import { HeaderComponent } from './pages/header/header.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProductsComponent } from './pages/products/products.component';
import { MakejsonPipe } from './pipes/makejson.pipe';
import { ProductWithApiComponent } from './pages/product-with-api/product-with-api.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RxjsExamplesComponent } from './pages/rxjs-examples/rxjs-examples.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductDetails2Component } from './pages/product-details2/product-details2.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ChangeColorDirective } from './directives/change-color.directive';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared/shared.module';
import { WidgetModule } from './widget/widget/widget.module';

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
    RxjsExamplesComponent,
    ProductWithApiComponent,
    ProductDetailsComponent,
    ProductDetails2Component,
    AddEmployeeComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductComponent,
    LoginComponent,
    ChangeColorDirective,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(),
    // ReactiveFormsModule,
    // FormsModule,
    // HttpClientModule,
    // NgxPaginationModule,
    // AppRoutingModule,
    // NgxSpinnerModule,
    // NgbAlertModule,
    // NgbModule
    AppRoutingModule,
    SharedModule,
    WidgetModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [EmployeeService],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
