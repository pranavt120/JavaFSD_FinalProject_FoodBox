import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterAdminService } from 'src/app/services/adminRegisterService/register-admin.service';
import { Admin } from 'src/types/admin';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  private admin: Admin;
  adminNotRegistered = true;
  requestMade = false;
  status: string;

  constructor(private registerService: RegisterAdminService, private router: Router, private route: ActivatedRoute) { 
    this.admin = new Admin();
  }

  ngOnInit(): void {
    
  }

  handleRegisterSubmit(){

    this.admin.email = this.form.value.email;
    this.admin.firstName = this.form.value.firstName;
    this.admin.lastName  = this.form.value.lastName;
    this.admin.password = this.form.value.password;
    this.admin.phone = this.form.value.phone;
    this.admin.userName = this.form.value.userName;

    this.registerService.registerAdmin(this.admin).subscribe((response: HttpResponse<Admin>) =>{
        
      this.requestMade = true;
      if(response.status == 201){
          this.adminNotRegistered = false;
          this.status = "Registered Successfully!!";
        }else{
          this.adminNotRegistered = true;
          this.status = "Something went wrong!!";
        }
    });
    }
    
  }


