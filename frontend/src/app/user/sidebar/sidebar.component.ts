import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListCusineService } from 'src/app/services/CusineServices/listCusineService/list-cusine.service';
import { Cusine } from 'src/types/cusine';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() filterEmitter: EventEmitter<number> = new EventEmitter<number>();
  sort:string;
  @Output() sortEmitter: EventEmitter<string> = new EventEmitter<string>();

  cusines: Cusine[];

  constructor(private cusineServie: ListCusineService) {
    this.cusines = new Array<Cusine>();
   }

  ngOnInit(): void {

    this.cusineServie.getCusines().subscribe({
      next: (data)=>{
        data.map(item=>{
          this.cusines.push(item);
        })
      },
      error: (e)=> console.log(e)
    });
  }

  handleSelectChange(form:NgForm){
    this.filterEmitter.emit(form.value.select);
  }

  handleSort(){
    this.sortEmitter.emit(this.sort);
  }

}
