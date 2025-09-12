import { Component, signal } from '@angular/core';
import { ItemComponent } from './components/item/item';
import { CardComponent } from './components/card/card';
import { Table } from './components/table/table';
import { DirCheck } from './components/directiveCheck/dir-check/dir-check';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ItemComponent,CardComponent,Table,DirCheck],
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
