import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/ApplicationDataStore/Store';
import { DeleteServiceService } from 'src/app/services/CusineServices/DeleteCusineService/delete-service.service';
import { ListCusineService } from 'src/app/services/CusineServices/listCusineService/list-cusine.service';
import { Cusine } from 'src/types/cusine';

@Component({
  selector: 'app-list-cusine',
  templateUrl: './list-cusine.component.html',
  styleUrls: ['./list-cusine.component.css']
})
export class ListCusineComponent implements OnInit {

  cusines:Cusine[];

  constructor(private getCusineService: ListCusineService, private deleteService: DeleteServiceService,
    private router: Router, private route: ActivatedRoute, private store: Store) {
    this.cusines = new Array<Cusine>();
   }

  ngOnInit(): void {
    this.getCusineService.getCusines().subscribe({
      next: (data)=>{
        data.map(item=>{
          this.cusines.push(item);
        });
      },
      error: (e)=> console.log(e)
    });

    
  }

  handleUpdateRoute(id:number){

    this.cusines.filter(item =>{
      if(item.id === id){
        this.store.storage = item;
      }
    });
    
    this.router.navigate(['../updateCusine',id],{relativeTo: this.route})
  }

  handleDelete(id:number){
    this.deleteService.deletCusine(id).subscribe({
      next: (d)=> console.log(d),
      error:(e)=>console.log(e)
    });

    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

}
