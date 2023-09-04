import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { SnotifyService } from 'ng-snotify';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
   employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  save(){
    if(this.employee.firstName && this.employee.lastName && this.employee.emailId !=null){
    this.employeeService.addEmployee(this.employee).subscribe({
      next : data=>{
      console.log(data);
      this.snackBar.open('Data saved successfully','X',{
        verticalPosition: 'top',
        horizontalPosition: 'right',
        duration: 4000,
      })
      this.router.navigate(['/employeeList'])
    },
  
    error: error=>console.log(error)
  })
  }
  else{
    this.snackBar.open('Please enter all details ','X',{
      horizontalPosition:'right' ,
      verticalPosition: 'top',
      duration: 4000,
    }
    )
  }

}
}
