import { Component, OnInit } from '@angular/core';
import { of , Observable, map, interval, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rx',
  imports: [CommonModule],
  templateUrl: './rx.html',
  styleUrl: './rx.scss'
})
export class Rx implements OnInit {
  data$! : Observable<any>;
constructor(private http : HttpClient){}
  ngOnInit() {
    this.data$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(
    map(todos => todos.filter(todo => todo.id % 2 === 0).slice(0,9))
    );
  }
}   
  
