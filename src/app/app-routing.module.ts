import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';
import {ProductListComponent} from './products/components/product-list/product-list.component';
import {OrderListComponent} from './orders/components/order-list/order-list.component';
import {OrderFormComponent} from './orders/components/order-form/order-form.component';
import {HomepageComponent} from './menu/homepage/homepage.component';
import {UserViewComponent} from './products/components/user-view/user-view.component';
import {ContactFormComponent} from './menu/contact-form/contact-form.component';
import {ContactMessageComponent} from './menu/contact-message/contact-message.component';
import {RegistrationMessageComponent} from './menu/registration-message/registration-message.component';
import {CheckoutFormComponent} from './menu/checkout-form/checkout-form.component';
import {CheckoutMessageComponent} from './menu/checkout-form/checkout-message/checkout-message.component';
import {GenerateTrafficComponent} from './generate-traffic/generate-traffic.component';
import {LoginComponent} from './login/login.component';




const routes: Routes = [{path: 'getProducts', component: ProductListComponent},
  {path: 'generateReport/:id', component: ProductListComponent},
  {path: 'generate', component: GenerateTrafficComponent},
  {path: 'getUsers', component: UserListComponent},
  {path: 'editUser/:id', component: UserEditComponent},
  {path: 'getOrders', component: OrderListComponent},
  {path: 'addOrder', component: OrderFormComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', component: LoginComponent},
  {path: 'userview', component: UserViewComponent},
  {path: 'contactForm', component: ContactFormComponent},
  {path: 'contactMessage', component: ContactMessageComponent},
  {path: 'registration', component: RegistrationMessageComponent},
  {path: 'checkout', component: CheckoutFormComponent},
  {path: 'checkoutMessage', component: CheckoutMessageComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
