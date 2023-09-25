import { Component } from '@angular/core';
import { Product } from '../product';
import { VendingMachineService } from '../vending-machine.service';
import { Section } from '../section';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css']
})
export class VendingMachineComponent {
  sections: Section[] = [];
  
  constructor(private vendingMachineService: VendingMachineService) { }

  ngOnInit(): void {
    this.vendingMachineService.getSections().subscribe(res => {
      this.sections = res;
    });
  }
}
