import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Section } from './section';

@Injectable({
  providedIn: 'root'
})
export class VendingMachineService {
  sections: Section[] = [];
  constructor() {
  }

  getSections(): Observable<Section[]> {
    this.sections = []
    for(let i = 1; i <= 3; i++) {
      let section = {id: i, products: []};
      this.sections.push(section);
    }
    const products = PRODUCTS;
    products.forEach(product => {
      this.sections.forEach(section => {
        if(section.id == product.section){
          section.products.push(product);
        }
      });
    });

    return of(this.sections);
  }
}
