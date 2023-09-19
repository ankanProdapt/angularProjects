import { Component, numberAttribute } from '@angular/core';
import { Brand } from '../brand';
import { CycleService } from '../cycle.service';

@Component({
  selector: 'all-cycle',
  templateUrl: './all-cycle.component.html',
  styleUrls: ['./all-cycle.component.css']
})
export class AllCycleComponent {
  brands: Brand[] = [];
  count: number = 1;

  constructor(private cycleService: CycleService) { }

  ngOnInit(): void {
    this.cycleService.getAllBrand().subscribe(res => {
      this.brands = res;
    });

  }

  borrow(brand: Brand): void {
    this.cycleService.borrowBrandCycle(brand.id, this.count).subscribe(res => this.brands = res);
    this.count = 1;
  }

  

}
