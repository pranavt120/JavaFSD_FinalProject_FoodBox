import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/types/customer';
import { GetCustomerService } from '../services/CustomerServices/getCustomerService/get-customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  customer:Customer;
  authenticated  = true;

  constructor(private customerService: GetCustomerService, private router: Router, private route: ActivatedRoute) { 
    this.customer = new Customer();
  }

  ngOnInit(): void {
  }

  handleLogin(form:NgForm){
    console.log(form.value.userName, typeof form.value.password);
    this.customerService.login(form.value.userName, form.value.password).subscribe({
      next: (data)=> {
        this.customer = data;
       
      },
      error: (e)=> {
        console.log(e);
        let pass = document.getElementById('password');
        console.log(pass);
        pass.classList.remove('ng-valid');
        pass.classList.add('ng-invalid');
      }
    });

    if(this.customer.id != 0){
      this.router.navigate(['../user'],{relativeTo:this.route});
    }
    else{
      this.authenticated = false;
    }
  }

 
}
