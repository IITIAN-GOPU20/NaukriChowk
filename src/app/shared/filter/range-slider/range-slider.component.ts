import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements AfterViewInit {
  @ViewChild('h4Element') h4Element!: ElementRef;
  @ViewChild('spanElement') spanElement!: ElementRef;
  
  rangePercent: number = 0;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const rangeInput = this.elementRef.nativeElement.querySelector('.range-slider [type="range"]');
    rangeInput.addEventListener('input', () => {
      this.rangePercent = parseFloat(rangeInput.value);
      this.updateRangeLabel();
    });
  }

  updateRangeLabel(): void {
    const h4Element = this.h4Element.nativeElement;
    const spanElement = this.spanElement.nativeElement;
    
    const rangeElement = this.elementRef.nativeElement.querySelector('.range-slider input[type="range"]');
  
    if (h4Element && spanElement && rangeElement) {
        const rangeValue = parseFloat(rangeElement.value);
        const percentage = (rangeValue / 30) * 100; // Calculate percentage within the range 0 to 30

        this.renderer.setStyle(rangeElement, 'filter', `hue-rotate(-${this.rangePercent}deg)`);
        this.renderer.setStyle(spanElement, 'filter', `hue-rotate(-${this.rangePercent}deg)`);
        this.renderer.setStyle(h4Element, 'transform', `translateX(-50%) scale(${1 + (percentage) / 200})`);
        this.renderer.setStyle(h4Element, 'left', percentage + '%'); // Set the left style property with the calculated percentage
    }
}

  onRangeChange(event: Event): void {
    const rangeInput = event.target as HTMLInputElement;
    this.rangePercent = parseFloat(rangeInput.value);
    
    this.updateRangeLabel();
  }
}
