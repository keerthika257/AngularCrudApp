import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule, 
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
