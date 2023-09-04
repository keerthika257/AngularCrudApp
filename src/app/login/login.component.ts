import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../user-details';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthGuardsService } from '../auth-guards.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFlag: number;
  userDetails :  UserDetails =  new UserDetails;
  constructor(private authGuardsService: AuthGuardsService, private userService: UserService, private snackbar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    this.loginFlag=0;
  }

  login(){
    this.authGuardsService.login(this.userDetails).subscribe({
      next: data=>{
      this.router.navigate(['/employeeList']);
    },
    error: error=>{
      this.snackbar.open('Invalid username and password','X',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration: 4000
      })
    }
  })
    }
  

  registerUser(){
    if(this.userDetails.firstName && this.userDetails.lastName && this.userDetails.emailId &&
       this.userDetails.password && this.userDetails.confirmPassword !=null){
    this.userService.saveUser(this.userDetails).subscribe({
    next: data=>{
      this.snackbar.open('Account created successfully','X',{
        verticalPosition:'top',
        horizontalPosition:'right',
        duration:4000,
      })
      window.location.reload();

    },
    error: error=>{
      this.snackbar.open('Username already exists','X',{
        verticalPosition:"top",
        horizontalPosition:"right",
        duration: 4000
      })
    }
  })
}
else{
this.snackbar.open('Please fill all details','X',{
  verticalPosition:"top",
  horizontalPosition:"right",
  duration: 4000
})
}
  }


  moveToSignup(){
    this.loginFlag=1;
  }
  moveToLogin(){
    this.loginFlag=0;
  }

}
