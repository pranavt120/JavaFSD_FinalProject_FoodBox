import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminDeleteService } from 'src/app/services/AdminDeleteService/admin-delete.service';
import { ListAdminService } from 'src/app/services/ListAdminService/list-admin.service';
import { Admin } from 'src/types/admin';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  adminList: Admin[];

  constructor(private getAdmin: ListAdminService, private route: ActivatedRoute, private router: Router,
    private deleteService: AdminDeleteService) {

    this.adminList = [];
   }

  ngOnInit(): void {

    this.getAdmin.getAdminList().subscribe(data =>{

      data.map( element =>{
        this.adminList.push(element);
      });

    });


  }

  handleUpdateRoute(id:number){
    console.log("in handleUpdate",id);
    this.router.navigate(['../authenticateAdmin',id], {relativeTo: this.route});
  }

  handleDelete(id:number){
    console.log('dafs');
    this.deleteService.deleteAdmin(id).subscribe({
      next: (data) =>{console.log("deleted success", data)},
      error: (e)=> console.log(e)

    });

    
    
  }

}
