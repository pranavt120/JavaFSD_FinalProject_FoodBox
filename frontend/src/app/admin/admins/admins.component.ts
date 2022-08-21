import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  handleListClick(){
    this.router.navigate(['listAdmins'],{relativeTo:this.route});
  }
  handleCreateClick(){
    this.router.navigate(['registerAdmin'],{relativeTo:this.route});
  }
}
