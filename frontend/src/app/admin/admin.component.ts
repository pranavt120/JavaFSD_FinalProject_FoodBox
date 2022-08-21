import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/types/admin';
import { Store } from '../ApplicationDataStore/Store';
import { AdminLoginService } from '../services/AdminLoginService/admin-login.service';
import { AuthentivateAdminService } from '../services/AuthenticateAdmin/authentivate-admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  constructor(){}

  ngOnInit(): void {
  }

  
  

}



