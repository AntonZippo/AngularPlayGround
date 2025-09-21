import { Component } from '@angular/core';
import { CounterService } from '../../../services/counter-service';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Counter {
  constructor(public counter : CounterService){}
}
