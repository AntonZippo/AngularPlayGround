import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-todo-id',
  imports: [],
  templateUrl: './todo-id.html',
  styleUrl: './todo-id.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoId implements OnInit {
todo: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .subscribe(data => this.todo = data);
      }
    });
  }
}