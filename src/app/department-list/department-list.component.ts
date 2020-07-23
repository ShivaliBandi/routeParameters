import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <h3>
    Department List
    </h3>
      <ul>
      <li (click)="onSelect(department)" *ngFor="let department of departments">
      {{department.id}}    {{department.name}}
      </li>
      </ul>
  `,
  styles: [
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
    this.router.navigate(['/departments',department.id]);
  }
}
