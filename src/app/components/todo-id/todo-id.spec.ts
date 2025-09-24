import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoId } from './todo-id';

describe('TodoId', () => {
  let component: TodoId;
  let fixture: ComponentFixture<TodoId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoId]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoId);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
