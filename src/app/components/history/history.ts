import { Component, Input } from '@angular/core';
import { MyPipePipe } from '../my-pipe-pipe';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-history',
  imports: [MyPipePipe],
  templateUrl: './history.html',
  styleUrl: './history.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class History {
@Input() one!: number;
@Input() two!: number;
@Input() rolls!: number[][];
}
