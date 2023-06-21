import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';
import {OrderListComponent} from './orders/components/order-list/order-list.component';
import {ProductListComponent} from './products/components/product-list/product-list.component';
import {ProductServiceService} from './products/service/product-service.service';
import {UserService} from './users/service/user.service';

import {OrderService} from './orders/service/order.service';
import {OrderFormComponent} from './orders/components/order-form/order-form.component';

import {CategoryService} from './categories/service/category.service';

import {ManufacturerServiceService} from './manufacturers/service/manufacturer-service.service';

import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { MenuComponent } from './menu/menu/menu.component';
import { FooterComponent } from './menu/footer/footer.component';
import { ContentComponent } from './menu/content/content.component';

import {HomepageComponent} from './menu/homepage/homepage.component';
import { UserViewComponent } from './products/components/user-view/user-view.component';
import { ContactFormComponent } from './menu/contact-form/contact-form.component';
import { ContactMessageComponent } from './menu/contact-message/contact-message.component';
import { RegistrationMessageComponent } from './menu/registration-message/registration-message.component';
import {HttpInterceptorService} from './users/service/http-interceptor.service';
import { CheckoutFormComponent } from './menu/checkout-form/checkout-form.component';
import { CheckoutMessageComponent } from './menu/checkout-form/checkout-message/checkout-message.component';
import { GenerateTrafficComponent } from './generate-traffic/generate-traffic.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    UserListComponent,
    UserEditComponent,
    OrderListComponent,
    ProductListComponent,
    OrderFormComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    HomepageComponent,
    UserViewComponent,
    ContactFormComponent,
    ContactMessageComponent,
    RegistrationMessageComponent,
    CheckoutFormComponent,
    CheckoutMessageComponent,
    GenerateTrafficComponent,
    LoginComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    NgbModule,
    NgMultiSelectDropDownModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
  ],
  providers: [ProductServiceService, UserService, OrderService, ManufacturerServiceService, CategoryService,
{
  provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
  multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
