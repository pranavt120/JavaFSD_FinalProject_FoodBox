import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminsComponent } from './admin/admins/admins.component';
import { CreateAdminComponent } from './admin/admins/create-admin/create-admin.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListAdminComponent } from './admin/admins/list-admin/list-admin.component';
import { UpdateAdminComponent } from './admin/admins/update-admin/update-admin.component';
import { AuthenticateAdminComponent } from './admin/admins/authenticate-admin/authenticate-admin.component';
import { Store } from './ApplicationDataStore/Store';
import { FoodItemsComponent } from './admin/food-items/food-items.component';
import { ListFoodItemComponent } from './admin/food-items/list-food-item/list-food-item.component';
import { UpdateFoodItemComponent } from './admin/food-items/update-food-item/update-food-item.component';
import { CreateFoodItemComponent } from './admin/food-items/create-food-item/create-food-item.component';
import { AddCusineComponent } from './admin/cusines/add-cusine/add-cusine.component';
import { ListCusineComponent } from './admin/cusines/list-cusine/list-cusine.component';
import { UpdateCusineComponent } from './admin/cusines/update-cusine/update-cusine.component';
import { CusinesComponent } from './admin/cusines/cusines.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { UserComponent } from './user/user.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { MainContentComponent } from './user/main-content/main-content.component';
import { SidebarComponent } from './user/sidebar/sidebar.component';
import { CartComponent } from './user/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { CheckOutComponent } from './check-out/check-out.component';
;



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    AdminsComponent,
    CreateAdminComponent,
    ListAdminComponent,
    UpdateAdminComponent,
    AuthenticateAdminComponent,
    FoodItemsComponent,
    ListFoodItemComponent,
    UpdateFoodItemComponent,
    CreateFoodItemComponent,
    AddCusineComponent,
    ListCusineComponent,
    UpdateCusineComponent,
    CusinesComponent,
    CustomersComponent,
    UserComponent,
    RegisterUserComponent,
    AdminLoginComponent,
    MainContentComponent,
    SidebarComponent,
    CartComponent,
    LandingPageComponent,
    FooterComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent,
    CheckOutComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
