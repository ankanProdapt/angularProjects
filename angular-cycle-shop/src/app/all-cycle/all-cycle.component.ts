import { Component, numberAttribute } from '@angular/core';
import { Brand } from '../brand';
import { BRANDS } from '../brands';
import { CycleService } from '../cycle.service';

@Component({
  selector: 'all-cycle',
  templateUrl: './all-cycle.component.html',
  styleUrls: ['./all-cycle.component.css']
})
export class AllCycleComponent {
  brands: Brand[] = [];
  count: number = 1;

  constructor(private cycleService: CycleService) {}

  ngOnInit(): void {
    this.cycleService.getAllCycle().subscribe(res => this.brands = res)
  }

  borrow(brand: Brand): void {
    this.cycleService.borrowCycle(brand.id).subscribe(res => this.brands = res);
  }
  restock(brand: Brand): void {
    if(this.count > 100){
      this.count = 100;
    }
    this.cycleService.restockCycle(brand.id, this.count).subscribe(res => this.brands = res);
  }

}
