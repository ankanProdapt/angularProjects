import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCycleComponent } from './all-cycle/all-cycle.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BorrowedCycleComponent } from './borrowed-cycle/borrowed-cycle.component';
import { AvailableCycleComponent } from './available-cycle/available-cycle.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RestockCycleComponent } from './restock-cycle/restock-cycle.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCycleComponent,
    BorrowedCycleComponent,
    AvailableCycleComponent,
    NavBarComponent,
    RestockCycleComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
