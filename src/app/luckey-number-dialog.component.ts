import {
  DIALOG_DATA,
  DialogRef,
} from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import {
  Component,
  Inject,
} from '@angular/core';

import { LuckyNumber } from './core/lucky_number';

@Component({
  selector: 'cdk-dialog-styling-example-dialog',
  templateUrl: 'luck-number-dialog.component.html',
  styleUrls: ['luck-number-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LuckyNumberDialogComponent {
  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: LuckyNumber
  ) {}
}
