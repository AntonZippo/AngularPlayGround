import { Component } from '@angular/core';
import { CounterService } from '../../../services/counter-service';
import { Self,SkipSelf } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mixed-counter',
  imports: [AsyncPipe],
  templateUrl: './mixed-counter.html',
  styleUrl: './mixed-counter.scss',
  providers : [CounterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MixedCounter {
 constructor(
  @Self() public localCounter : CounterService,
  @SkipSelf() public globalCounter : CounterService
 ){}
}
