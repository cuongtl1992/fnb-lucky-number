import {
  DIALOG_DATA,
  DialogRef,
} from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';

import printJS from 'print-js';

import { LuckyNumber } from './core/lucky_number';

@Component({
  selector: 'cdk-dialog-styling-example-dialog',
  templateUrl: 'luck-number-dialog.component.html',
  styleUrls: ['luck-number-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LuckyNumberDialogComponent implements OnInit {
  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: LuckyNumber
  ) { }

  ngOnInit(): void {
    
  }

  print() {
    printJS({
      printable: 'printableArea',
      type: 'html',
      scanStyles: false,
      style: '@page { size: 50mm 30mm; margin: 0; } body { margin: 0; padding: 0; width: 50mm; height: 30mm; display: flex; align-items: center; justify-content: center; } .lucky-number { font-size: 48px; text-align: center; }'
  });
  }
}
