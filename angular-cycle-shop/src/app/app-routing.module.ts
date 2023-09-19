import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCycleComponent } from './all-cycle/all-cycle.component';
import { BorrowedCycleComponent } from './borrowed-cycle/borrowed-cycle.component';
import { AvailableCycleComponent } from './available-cycle/available-cycle.component';
import { RestockCycleComponent } from './restock-cycle/restock-cycle.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path: "", component: AllCycleComponent},
  {path: "borrowed", component: BorrowedCycleComponent},
  {path: "available", component: AvailableCycleComponent},
  {path: "restock", component: RestockCycleComponent},
  {path: "login", component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }