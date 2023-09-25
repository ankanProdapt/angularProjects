import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Section } from './section';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class VendingMachineService {
  sections: Section[] = [];
  products: Product[] = PRODUCTS;
  bills: Bill[] = [];

  constructor() { }

  getSections(): Observable<Section[]> {
    this.sections = []
    for(let i = 1; i <= 3; i++) {
      let section = {id: i, isOpen: false, products: []};
      this.sections.push(section);
    }
    this.products.forEach(product => {
      this.sections.forEach(section => {
        if(section.id == product.section){
          section.products.push(product);
        }
      });
    });

    return of(this.sections);
  }

  getSectionId(productId: number): Observable<number> {
    let sectionId = 0;
    this.products.forEach(p => {
      if(p.id == productId) {
        sectionId = p.section;
      }
    });
    return of(sectionId);
  }


  generateBill(selectedProducts: Product[]): void {
    selectedProducts.forEach(p => {
      let product = this.products[p.id - 1];
      product.quantity -= p.quantity;
    });
    let bill = {purchasedProducts: selectedProducts};
    this.bills.push(bill);
    console.log(this.bills);
  }

  getLatestBill(): Observable<Bill> {
    return of(this.bills[this.bills.length - 1]);
  }

}
