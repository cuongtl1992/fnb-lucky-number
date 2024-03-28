import {
  Dialog,
  DialogModule,
} from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';

import { LuckyDraw } from '../core/lucky_draw';
import { tetGreetings } from '../core/lucky_messages';
import { LuckyNumber } from '../core/lucky_number';
import { LuckyNumberDialogComponent } from '../luckey-number-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  gifts: LuckyNumber[] | undefined;
  openedNumber: number[] = localStorage.getItem(`openedNumber`) != null ? JSON.parse(localStorage[`openedNumber`]) : []

  constructor(
    private readonly dialog: Dialog
  ) {

  }

  ngOnInit(): void {  
    const luckyDraw = new LuckyDraw({
      totalGift: 104,
      coins: [100, 10000, 20000, 50000, 100000, 200000, 500000],
      coinAllocationPercentages: [1, 35, 30, 15, 10, 7, 2],
      messages: tetGreetings
    });

    this.gifts = luckyDraw.giftWithCoints;
  }

  showLuckyNumber(luckyNumber: LuckyNumber): void {
    this.dialog.open<string>(LuckyNumberDialogComponent, {
      data: luckyNumber
    });
    this.openedNumber.push(luckyNumber.number);
    localStorage.setItem(`openedNumber`, JSON.stringify(this.openedNumber))
  }
}
