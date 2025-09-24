import { Component, signal } from '@angular/core';
import { ItemComponent } from './components/item/item';
import { CardComponent } from './components/card/card';
import { Table } from './components/table/table';
import { DirCheck } from './components/directiveCheck/dir-check/dir-check';
import { Rx } from './components/RXJS/rx/rx';
import { RxBtn } from './components/RXJS/rx-btn/rx-btn/rx-btn';
import { Counter } from './components/counterService/counter/counter';
import { LocalCounter } from './components/counterService/local-counter/local-counter';
import { MixedCounter } from './components/counterService/mixed-counter/mixed-counter';
import { AnalyticsComponent } from './components/counterService/analytics-component/analytics-component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ItemComponent,CardComponent,Table,DirCheck,Rx,RxBtn,Counter,LocalCounter,MixedCounter,AnalyticsComponent,RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
  message = ""
  showHideMessage(){
    this.message = "HIDEN MESSAGE!"
  }
  hideHideMessage(){
    this.message = ""
  }
}
