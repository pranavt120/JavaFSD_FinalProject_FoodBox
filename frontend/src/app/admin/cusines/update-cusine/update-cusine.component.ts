import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from 'src/app/ApplicationDataStore/Store';
import { UpdateCusineService } from 'src/app/services/CusineServices/UpdateCusineService/update-cusine.service';
import { Cusine } from 'src/types/cusine';

@Component({
  selector: 'app-update-cusine',
  templateUrl: './update-cusine.component.html',
  styleUrls: ['./update-cusine.component.css']
})
export class UpdateCusineComponent implements OnInit {

  cusine:Cusine;
  udpateStatus:boolean;
  updateMessage :string;

  constructor(private store:Store, private updateService: UpdateCusineService) { 
    this.cusine =  new Cusine();
  }

  ngOnInit(): void {

    this.cusine = this.store.storage;
  }

  handleSubmit(form:NgForm){
    this.cusine.name = form.value.name;
    this.cusine.description = form.value.description;

    this.updateService.update(this.cusine.id, this.cusine).subscribe({
      next: (data)=>{
        if(data.id){
          this.udpateStatus = true;
          this.updateMessage = "Updated Successfully!";
        }
      },
      error: (e)=>{
        this.udpateStatus = false;
        this.updateMessage = "Something went wrong!!";
      }
    });
  }
}
