import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';
import { BillComponent } from './bill/bill.component';

const routes: Routes = [
  {path: "", component: VendingMachineComponent},
  {path: "bill", component: BillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
