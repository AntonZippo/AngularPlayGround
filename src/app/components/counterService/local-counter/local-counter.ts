import { Component } from '@angular/core';
import { CounterService } from '../../../services/counter-service';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-local-counter',
  imports: [AsyncPipe],
  templateUrl: './local-counter.html',
  styleUrl: './local-counter.scss',
  providers : [CounterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalCounter {
  constructor(public counter : CounterService){}

}
