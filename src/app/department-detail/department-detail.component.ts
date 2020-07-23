import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
   <h1>
   you You selected department with id={{departmentId}}
   </h1>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId=id;
  }

}
