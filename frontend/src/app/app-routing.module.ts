import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminsComponent } from './admin/admins/admins.component';
import { AuthenticateAdminComponent } from './admin/admins/authenticate-admin/authenticate-admin.component';
import { CreateAdminComponent } from './admin/admins/create-admin/create-admin.component';
import { ListAdminComponent } from './admin/admins/list-admin/list-admin.component';
import { UpdateAdminComponent } from './admin/admins/update-admin/update-admin.component';
import { AddCusineComponent } from './admin/cusines/add-cusine/add-cusine.component';
import { CusinesComponent } from './admin/cusines/cusines.component';
import { ListCusineComponent } from './admin/cusines/list-cusine/list-cusine.component';
import { UpdateCusineComponent } from './admin/cusines/update-cusine/update-cusine.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { CreateFoodItemComponent } from './admin/food-items/create-food-item/create-food-item.component';
import { FoodItemsComponent } from './admin/food-items/food-items.component';
import { ListFoodItemComponent } from './admin/food-items/list-food-item/list-food-item.component';
import { UpdateFoodItemComponent } from './admin/food-items/update-food-item/update-food-item.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'admin', component:AdminLoginComponent},
  {path:'customerLogin', component: CustomerLoginComponent},
  {path:'customerSignUp', component: CustomerRegisterComponent},
  {path:'checkout', component: CheckOutComponent},
  {path: 'adminHome', component: AdminComponent, children: [
    {path: 'admins', component: AdminsComponent,children:[
      {path: 'listAdmins', component: ListAdminComponent},
      {path: 'registerAdmin', component: CreateAdminComponent},
      {path: 'authenticateAdmin/:id', component:AuthenticateAdminComponent},
      {path: 'updateAdmin/:id', component: UpdateAdminComponent}
    ]},
    {path:'foodItems',component:FoodItemsComponent,children:[
      {path: 'listItems', component:ListFoodItemComponent},
      {path: 'createItem', component:CreateFoodItemComponent},
      {path: 'updateItem/:id', component: UpdateFoodItemComponent}
    ]},
    {path:'cusines', component:CusinesComponent,children:[
      {path:'listCusines', component:ListCusineComponent},
      {path:'createCusine', component:AddCusineComponent},
      {path:'updateCusine/:id', component: UpdateCusineComponent}
    ]},
    {path:'customers',component: CustomersComponent},
  ]},
 
  {path:'user', component: UserComponent, children:[

  ]},
  {path:'', component:LandingPageComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
