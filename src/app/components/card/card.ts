import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  username : string = '';
  age : string = '' ;
  job : string = '';
  cardName : string = 'Имя';
  cardAge : string = 'Возраст' ;
  cardJob : string = 'Должность';

  savePerson() {
    this.cardName = this.username;
    this.cardAge = this.age;
    this.cardJob = this.job;
  }
  
}
