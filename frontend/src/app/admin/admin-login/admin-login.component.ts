import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/ApplicationDataStore/Store';
import { AdminLoginService } from 'src/app/services/AdminLoginService/admin-login.service';
import { Admin } from 'src/types/admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin: Admin
  wrongPass: boolean;
  errorMessage = "Wrong Password";

  constructor(private route: ActivatedRoute,
     private loginService: AdminLoginService, private router: Router, private store: Store) { 
      
      this.admin = new Admin();
  
    }

  ngOnInit(): void {
  }

  handleLogin(form:NgForm){
    this.admin.userName = form.value.username;
    this.admin.password = form.value.password;

    console.log(this.admin);

    this.loginService.loginService(this.admin).subscribe({
      next: (data)=>{
        this.routeToAdmin(data.id)
      },
      error: (e) => {
        this.wrongPass = true;
      }
    }
    
    );
  }

  routeToAdmin(id:number){

    this.store.storage = this.admin;


    this.router.navigate(["adminHome"]);
  }

}
