import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { History } from '../history/history';

@Component({
  selector: 'app-table',
  standalone : true,
  imports: [CommonModule,History],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
    public message : string = "Test Your Luck!";
    public one : number = 0;
    public two : number = 0;
    public result : number = 0;
    public rolls : number[][] = [];
    goRoll(){
      this.one = Math.floor(Math.random() * 7 ) ;
      this.two = Math.floor(Math.random() * 7 ) ;
      this.result = this.one + this.two;
      if (this.result == 7) {
        this.message = "WIN!"
      } else {
        this.message = "Better luck next time!"
      }
      this.rolls = [...this.rolls, [this.one, this.two]];
    }
}
