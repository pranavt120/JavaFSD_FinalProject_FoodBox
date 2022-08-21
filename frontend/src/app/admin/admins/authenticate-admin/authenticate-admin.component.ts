import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/ApplicationDataStore/Store';
import { AdminLoginService } from 'src/app/services/AdminLoginService/admin-login.service';
import { AuthentivateAdminService } from 'src/app/services/AuthenticateAdmin/authentivate-admin.service';
import { Admin } from 'src/types/admin';

@Component({
  selector: 'app-authenticate-admin',
  templateUrl: './authenticate-admin.component.html',
  styleUrls: ['./authenticate-admin.component.css']
})
export class AuthenticateAdminComponent implements OnInit {

  adminId:number;
  admin: Admin;
  wrongPass: boolean;
  errorMessage = "Wrong Password";

  constructor(private route: ActivatedRoute, private authenticateService: AuthentivateAdminService,
     private loginService: AdminLoginService, private router: Router, private store: Store) { 
    this.admin = new Admin();
  }

  ngOnInit(): void {

    console.log("in authenticate admin c");

    this.route.params.subscribe(id =>{
      this.adminId = id['id'];
    });

    this.authenticateService.getAdmin(this.adminId).subscribe(data =>{
      this.admin = data;
    });


  }

  handleAuthenticate(form:NgForm){
    this.admin.password = form.value.password;

    this.loginService.loginService(this.admin).subscribe({
      next: (data)=>{
        this.routeToUpdate(data.id)
      },
      error: (e) => {
        this.wrongPass = true;
      }
    }
    
    );
  }

  routeToUpdate(id:number){

    this.store.storage = this.admin;

    this.router.navigate(['../../updateAdmin', id], {relativeTo: this.route});
  }

}
