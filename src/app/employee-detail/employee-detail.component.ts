import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h3> Employee Detail   id: {{employeeId}}</h3>
    <a (click)="goPrevious()"> Previous</a>
    <a (click)="goNext()"> Next</a>
    <div>
    <a (click)="goEmployees()">Back</a>
    </div>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employeeId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt( this.route.snapshot.paramMap.get('id'));
    // this.employeeId = id;
    this.route.paramMap.subscribe( (params: ParamMap) => {
        let id = parseInt( params.get('id'));
        this.employeeId = id;
    });
  }

  goPrevious() {
    this.employeeId = this.employeeId - 1;
    this.router.navigate(['employees', this.employeeId]);
  }

  goNext() {
    this.employeeId = this.employeeId + 1;
    this.router.navigate(['employees', this.employeeId]);
  }

  goEmployees() {
    let selectedId = this.employeeId ? this.employeeId : null;
    this.router.navigate(['/employees', {id: selectedId}]);
  }
}
