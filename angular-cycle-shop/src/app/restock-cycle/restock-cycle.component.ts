import { Component } from '@angular/core';
import { Brand } from '../brand';
import { CycleService } from '../cycle.service';

@Component({
  selector: 'app-restock-cycle',
  templateUrl: './restock-cycle.component.html',
  styleUrls: ['./restock-cycle.component.css', '../all-cycle/all-cycle.component.css']
})
export class RestockCycleComponent {
  brands: Brand[] = [];
  count: number = 1;
  qty: number = 0;
  name: string = "";

  constructor(private cycleService: CycleService) { }

  ngOnInit(): void {
    this.cycleService.getAllBrand().subscribe(res => {
      this.brands = res;
    });

  }

  restock(brand: Brand): void {
    this.cycleService.restockCycle(brand.id, this.count).subscribe(res => this.brands = res);
    this.count = 1;
  }

  addNewBrand() {
    console.log(this.name + " " + this.qty);
    if(this.name.trim() == ""){
      return;
    }
    this.cycleService.addNewBrand(this.name, this.qty).subscribe(res => this.brands = res);
    this.qty = 0;
    this.name = "";
  }
}
