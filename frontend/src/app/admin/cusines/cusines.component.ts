import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cusines',
  templateUrl: './cusines.component.html',
  styleUrls: ['./cusines.component.css']
})
export class CusinesComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }


  handleListClick(){
    this.router.navigate(['listCusines'],{relativeTo:this.route});
  }
  handleCreateClick(){
    this.router.navigate(['createCusine'],{relativeTo:this.route});
  }

}
