import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }


  handleListClick(){
    this.router.navigate(['listItems'],{relativeTo:this.route});
  }
  handleCreateClick(){
    this.router.navigate(['createItem'],{relativeTo:this.route});
  }

}
