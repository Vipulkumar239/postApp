import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BaseService } from '../services/base-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  post: any = [];

  constructor(private service: BaseService , private router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((result) => {
      this.post = result;
    });
  }

  delete(id:number){
    this.service.deletepost(id).subscribe((result) => {
      alert('Post Deleted Sucessfully')
    });

    
  }

  navigate(userid:any,id:any){

    sessionStorage.setItem('userid',userid);
    sessionStorage.setItem('id',id);

    this.router.navigate(['edit']);
  }

  addpost(){
    this.router.navigate(['create']);
  }
}
