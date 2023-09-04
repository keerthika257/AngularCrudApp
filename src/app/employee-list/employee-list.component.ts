import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getEmployee();
  }       

private getEmployee()
{
this.employeeService.getEmployeeList().subscribe(
  data=>{
    this.employees = data;
  });
}


getEmployeeDetails(id: number){
  this.router.navigate(['employeeDetails',id]);
}
updateEmployee(id:number){
  this.router.navigate(['updateEmployee', id]);
}
deleteEmployee(id:number){
this.employeeService.deleteEmployee(id).subscribe(data=>{
  this.snackBar.open('Data deleted successfully','X',{
    verticalPosition: 'top',
    horizontalPosition: 'right',
    duration: 4000,
  })
this.getEmployee();
})
}
gotoAddEmployee(){
  this.router.navigate(['/addEmployee']);
}

}
