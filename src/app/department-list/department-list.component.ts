import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <H3> Department Lis</H3>
    <div>
    <ul class="items">
    <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
      <span class="badge"> {{department.id}}--  </span>  {{department.name}}
    </li>
    </ul>
    </div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {'id': 1, 'name': 'MARKET'},
    {'id': 2, 'name': 'GENERAL'},
    {'id': 3, 'name': 'HUMAN RESOURCE'},
    {'id': 4, 'name': 'PRODUCT'},
    {'id': 5, 'name': 'FINCINCE'},
    {'id': 6, 'name': 'RESEARCH & DEVELMENT'}
  ];

  public selectedId;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) =>  {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect( department) {
    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
