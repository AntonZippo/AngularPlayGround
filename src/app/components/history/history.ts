import { Component, Input } from '@angular/core';
import { MyPipePipe } from '../my-pipe-pipe';

@Component({
  selector: 'app-history',
  imports: [MyPipePipe],
  templateUrl: './history.html',
  styleUrl: './history.scss'
})
export class History {
@Input() one!: number;
@Input() two!: number;
@Input() rolls!: number[][];
}
