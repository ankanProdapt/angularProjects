import { Component } from '@angular/core';
import { Cycle } from '../cycle';
import { CycleService } from '../cycle.service';

@Component({
  selector: 'borrowed-cycle',
  templateUrl: './borrowed-cycle.component.html',
  styleUrls: ['./borrowed-cycle.component.css']
})
export class BorrowedCycleComponent {
  cycles : Cycle[] = [];

  constructor(private cycleService: CycleService) {}

  ngOnInit() : void {
    this.cycleService.getAllBorrowedCycle().subscribe(res => this.cycles = res);
    console.log(this.cycles);
  }

  returnCycle(cycle: Cycle) : void {
    this.cycleService.returnCycle(cycle.id).subscribe(res => this.cycles = res);
    console.log(cycle);
  }

}
