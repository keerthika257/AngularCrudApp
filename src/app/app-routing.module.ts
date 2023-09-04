import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'addEmployee',component:AddEmployeeComponent},
  {path:'updateEmployee/:id',component:UpdateEmployeeComponent},
  {path:'employeeList',component:EmployeeListComponent},
  {path:'employeeDetails/:id',component:EmployeeDetailsComponent},
  {path:'login',component:LoginComponent},
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
