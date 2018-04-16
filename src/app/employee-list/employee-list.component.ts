import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
    <H3> Employee List</H3>
    <div>
    <ul class="items">
    <li (click)="onSelect(employee)" [class.selected]="isSelected(employee)" *ngFor="let employee of employees">
      <span class="badge"> {{employee.id}}--  </span>  {{employee.name}}
    </li>
    </ul>
    </div>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  employees = [
    { 'id': 1, 'name': 'Alfred Huang' },
    { 'id': 2, 'name': 'Nancy Tseng' },
    { 'id': 3, 'name': 'Cindy Huang' },
    { 'id': 4, 'name': 'Daphne Huang' },
    { 'id': 5, 'name': 'Eric Huang' },
    { 'id': 6, 'name': 'John Huang' }
  ];

  public selectedId;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(employee) {
    this.router.navigate(['employees', employee.id]);
  }

  isSelected(employee) {
    return employee.id === this.selectedId;
  }
}
