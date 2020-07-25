import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <h3>
    Department List
    </h3>
      <div>
      <button (click)="onSelect(department)" class="button button1" *ngFor="let department of departments">
     <span > {{department.id}} </span> {{department.name}}
      
      </button>
      </div>
  `,
  styles: [
    `
    .button {
      background-color:grey;
      border: none;
      color: white;
      padding: 12px 4px;
      text-align: center;
      text-decoration: none;
      display: block;
      font-size: 16px;
      margin: 8px 4px;
      transition-duration: 0.4s;
      cursor: pointer;
      
      }


      .button1 {
        background-color: white;
        color: black;
        border: 2px solid #555555;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        border-radius: 5px;

      }
      
      .button1:hover {
        border-radius: 5px;

        background-color: #555555;
        color: white;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
      }

      .active{
        background-color:purple;
        color:white;
        display:inline-block;
        padding:16px 5px;


      }
    `
  ]
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router) { }
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Ruby"},
    {"id":3,"name":"Node.js"},
    {"id":4,"name":"mongoDb"},
    {"id":5,"name":"bootstrap"}

  ]
  ngOnInit(): void {
  }
  onSelect(department)
  {
    this.router.navigate(['/departments',department.id])
  }
}
