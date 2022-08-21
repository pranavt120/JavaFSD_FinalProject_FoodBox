import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddCusineService } from 'src/app/services/CusineServices/AddCusineService/add-cusine.service';
import { Cusine } from 'src/types/cusine';

@Component({
  selector: 'app-add-cusine',
  templateUrl: './add-cusine.component.html',
  styleUrls: ['./add-cusine.component.css']
})
export class AddCusineComponent implements OnInit {

  cusine:Cusine;
  addStatus:boolean;
  addMessage:string;

  constructor(private addCusineService: AddCusineService) { 
    this.cusine = new Cusine();
  }

  ngOnInit(): void {
  }

  handleSubmit(form:NgForm){
    this.cusine.name = form.value.name;
    this.cusine.description = form.value.description;

    this.addCusineService.addCusine(this.cusine).subscribe({
      next: data=>{
        if(data.id){
          this.addStatus = true;
          this.addMessage = "Added Successfully";
        }
      },
      error: error=>{
        this.addStatus = false;
          this.addMessage = "Something went wrong";
      }
    });
  }
}
