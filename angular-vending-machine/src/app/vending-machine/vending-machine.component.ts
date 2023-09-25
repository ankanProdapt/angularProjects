import { Component } from '@angular/core';
import { Section } from '../section';
import { VendingMachineService } from '../vending-machine.service';
import { Product } from '../product';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css']
})
export class VendingMachineComponent {
  sections: Section[] = [];
  selectedSection: number = 0;
  selectedProducts: Product[] = [];

  constructor(private vendingMachineService: VendingMachineService, private router: Router){}

  ngOnInit(): void {
    this.vendingMachineService.getSections().subscribe(res => {
      this.sections = res;
    })
  }

  openSectionContaining(id: number): void {
    this.vendingMachineService.getSectionId(id).subscribe(res => {
      this.toggleDoor(res);
    });
  }

  toggleDoor(id: number): void {
    if(this.selectedSection != 0) {
      let section = this.sections[this.selectedSection - 1];
      if(section.isOpen) {
        section.isOpen = false;
        this.selectedSection = 0;
        this.generateBill();
      }
      else {
        section.isOpen = true;
      }
    }
    else {
      this.selectedSection = id;
      let section = this.sections[id - 1];
      section.isOpen = true;
    }
  }

  updateProductQuantity(product: Product, delta: number): void {
    let flag = false;
    this.selectedProducts.forEach(p => {
      if(p.id == product.id) {
        p.quantity = Math.max(Math.min(p.quantity + delta, product.quantity), 0);
        flag = true;
      }
    });
    if(flag) return;
    let p = {...product};
    p.quantity = 0;
    p.quantity = Math.max(Math.min(p.quantity + delta, product.quantity), 0);
    this.selectedProducts.push(p);
    console.log(this.selectedProducts);
  }

  generateBill(): void {
    this.vendingMachineService.generateBill(this.selectedProducts);
    this.router.navigateByUrl("/bill");
  }

  getSelectedProductCount(id: number): number {
    let count = 0;
    this.selectedProducts.forEach(p => {
      if(p.id == id) {
        count = p.quantity;
      }
    });
    return count;
  }
}
