import { Component } from '@angular/core';
import { VendingMachineService } from '../vending-machine.service';
import { Bill } from '../bill';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  bill?: Bill;
  constructor(private vendingMachineService: VendingMachineService, private router: Router) {}

  ngOnInit(): void {
    this.vendingMachineService.getLatestBill().subscribe(res => {
      this.bill = res;
    })
  }

  getTotalCost(): number {
    let total = 0;
    this.bill?.purchasedProducts.forEach(p => {
      total += p.cost * p.quantity;
    });
    return total;
  }

  goBack() {
    this.router.navigateByUrl("/");
  }
}
