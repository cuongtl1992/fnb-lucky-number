import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lucky-draw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lucky-draw.component.html',
  styleUrl: './lucky-draw.component.scss',
  animations: [],
})
export class LuckyDrawComponent {
  luckyNumbers: number[] =
    localStorage.getItem(`openedNumber`) != null
      ? JSON.parse(localStorage[`openedNumber`])
      : [];
  chosenNumber?: number;
  spinning = false;
  constructor() {}

  spin(): void {
    this.spinning = true;
    const spinTime = 5000;
    const intervalTime = spinTime / (this.luckyNumbers.length * 100);

    const interval = setInterval(() => {
      this.chosenNumber =
        this.luckyNumbers[this.rand(this.luckyNumbers)];
    }, intervalTime);

    setTimeout(() => {
      clearInterval(interval);
      this.spinning = false;
    }, spinTime);
  }

  rand(items: number[]) {
    return ~~(items.length * Math.random());
  }
}
