import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <H2>  Department Detail id:{{departmentId}}</H2>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
    <div>
    <a (click)="goDepartments()">Back</a>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt( this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe( (params: ParamMap) =>  {
        let id = parseInt(params.get('id'));
        this.departmentId = id;
      });
  }

  goPrevious() {
    this.departmentId = this.departmentId - 1;
    this.router.navigate(['/departments', this.departmentId]);
  }
  goNext() {
    this.departmentId = this.departmentId + 1;
    this.router.navigate(['/departments', this.departmentId]);
  }
  goDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}]);
  }

}
