import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
   id: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router:Router, private activatedRoute: ActivatedRoute,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.params['id'];
  this.employeeService.getEmployeeById(this.id).subscribe(data=>
    {
     this.employee = data;
    })
  }

updateEmployee(){
  if(this.employee.firstName && this.employee.lastName && this.employee.emailId !=null){
  this.employeeService.updateEmployee(this.employee).subscribe({
    next : data=>{
      console.log(data);
        this.snackBar.open('Data updated successfully','X',{
        verticalPosition: 'top',
        horizontalPosition: 'right',
        duration: 4000,
      })
      this.router.navigate(['employeeList']);
    },
    error: error=>console.log(error)
  }
    )
}
else{
  this.snackBar.open('Please fill all details','X',{
    verticalPosition: 'top',
    horizontalPosition: 'right',
    duration: 4000,
  })
}
  }



}
