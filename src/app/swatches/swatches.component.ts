import { Component, OnInit } from '@angular/core';
import { ISwatch } from './swatch';
import { SwatchService } from './swatch.service';

@Component({
  selector: 'app-swatches',
  templateUrl: './swatches.component.html',
  styleUrls: ['./swatches.component.scss']
})
export class SwatchesComponent implements OnInit {

  errorMessage: string;
  selected: boolean = false;

  constructor(private swatchService: SwatchService) {}

  filteredSwatches: ISwatch[];
  swatches: ISwatch[] = [];

  onSelect(swatch): void {
    let active = document.querySelector('.swatches')
    let item = document.querySelector('[data-index="'+swatch+'"]')
    if (! active.classList.contains('fs')){
      active.classList.add('fs') 
      let topPos = item.offsetLeft;
      active.scrollLeft = topPos
    } else {
      active.classList.remove('fs')
    }
  }

  ngOnInit(): void {
    this.swatchService.getSwatches().subscribe({
      next: swatches => {
        this.swatches = swatches;
        this.filteredSwatches = this.swatches;
      },
      error: err => this.errorMessage = err
    });
  }

}
