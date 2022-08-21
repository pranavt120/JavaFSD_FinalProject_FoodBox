import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from 'src/app/ApplicationDataStore/Store';
import { AdminUpdateService } from 'src/app/services/AdminUpdateService/admin-update.service';
import { Admin } from 'src/types/admin';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  @ViewChild('form') form;

  admin: Admin;
  id: number;
  requestMade:boolean;
  adminNotUpdated:boolean;
  status:string;

  constructor(private route: ActivatedRoute, private updateService : AdminUpdateService,
     private store: Store, private router: Router) {
    this.admin = new Admin();
   }

  ngOnInit(): void {

    this.route.params.subscribe(data =>{
      this.id = data['id'];
    });

    console.log(this.store.storage);
    this.admin = this.store.storage;
    
  }


  handleRegisterSubmit(){

    this.admin.email = this.form.value.email;
    this.admin.firstName = this.form.value.firstName;
    this.admin.lastName  = this.form.value.lastName;
    this.admin.password = this.form.value.password;
    this.admin.phone = this.form.value.phone;
    this.admin.userName = this.form.value.userName;

    this.updateService.updateAdmin(this.admin, this.admin.id).subscribe((response: HttpResponse<Admin>) =>{
        
      this.requestMade = true;
      if(response.status == 201){
          this.adminNotUpdated = false;
          this.status = "Updated Successfully!!";
        }else{
          this.adminNotUpdated = true;
          this.status = "Something went wrong!!";
        }

        this.router.navigate(['../../listAdmins'],{relativeTo: this.route});
    });
    }
}
