import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/types/customer';
import { GetCustomerService } from '../services/CustomerServices/getCustomerService/get-customer.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  customer:Customer;
  registered: boolean;

  constructor(private customerService: GetCustomerService) { 
    this.customer = new Customer();
  }

  ngOnInit(): void {
  }

  handleRegister(form:NgForm){
    this.customer.email = form.value.email;
    this.customer.firstName = form.value.firstName;
    this.customer.lastName = form.value.lastName;
    this.customer.password = form.value.password;
    this.customer.phone = form.value.phone;
    this.customer.userName = form.value.userName;

    this.customerService.register(this.customer).subscribe({
      next: (data)=>this.registered = true,
      error: (e)=>console.log(e)
    });
  }

}
