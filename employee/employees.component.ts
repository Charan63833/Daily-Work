import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
employee= { name: 'Charan', age: 22, address: 'Nellore'}
  constructor() { }

  ngOnInit(): void {
  }

}