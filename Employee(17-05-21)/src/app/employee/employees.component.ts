import { Component } from '@angular/core';
import { EMPLOYEES } from '../employee-mock';

@Component({
  selector: 'app-employee',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeeComponent  {
  employees=EMPLOYEES;
  emp={name:"charan", company:"cts", address:"Mtm"}

}
