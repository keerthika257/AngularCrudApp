import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private static readonly URL_EMPLOYEE_CONTROLLER = environment.apiUrl + '/employees';

  constructor(private httpClient: HttpClient) { }

addEmployee(employee:Employee):Observable<Object>{
   return this.httpClient.post(EmployeeService.URL_EMPLOYEE_CONTROLLER + '/saveEmployee/' ,employee);
   //return this.httpClient.post(EmployeeService.URL_EMPLOYEE_CONTROLLER ,employee);
   
}
updateEmployee(employee:Employee):Observable<Object>{
  return this.httpClient.put(EmployeeService.URL_EMPLOYEE_CONTROLLER + '/updateEmployee/' ,employee);
  // this.httpClient.put(EmployeeService.URL_EMPLOYEE_CONTROLLER  + id ,employee);
}
deleteEmployee(id:number):Observable<Object>{
  return this.httpClient.delete(EmployeeService.URL_EMPLOYEE_CONTROLLER + '/deleteEmployee/' + id);
  //return this.httpClient.delete(EmployeeService.URL_EMPLOYEE_CONTROLLER  + id);
}
getEmployeeList():Observable<Employee[]>{
  //return this.httpClient.get<Employee[]>(EmployeeService.URL_EMPLOYEE_CONTROLLER );
    return this.httpClient.get<Employee[]>(EmployeeService.URL_EMPLOYEE_CONTROLLER + '/employeeList/' );
}

getEmployeeById(id: number):Observable<Employee>{
  return this.httpClient.get<Employee>(EmployeeService.URL_EMPLOYEE_CONTROLLER + '/getEmployeeById/'  + id);
}
}
