import { Component, OnInit ,ViewChild , ElementRef} from '@angular/core';
import { of , Observable, map, interval, take, fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rx-btn',
  imports: [CommonModule],
  templateUrl: './rx-btn.html',
  styleUrl: './rx-btn.scss'
})
export class RxBtn implements OnInit{
private id : number = 0;
private click$ = fromEvent(document, 'click');
public counter : number = 0;
data$! : Observable<any>;
dataCntr$! : Observable<any>;
constructor(private http : HttpClient){}

@ViewChild('btn', { static: true }) btn!: ElementRef<HTMLButtonElement>;
@ViewChild('incBtn',{static : true}) incBtn! : ElementRef<HTMLButtonElement>;
@ViewChild('decBtn',{static : true}) decBtn! : ElementRef<HTMLButtonElement>;
@ViewChild('getBtn',{static : true}) getBtn! : ElementRef<HTMLButtonElement>;

ngOnInit(){
fromEvent(this.btn.nativeElement, 'click').subscribe( () => {
this.fethcId()
});
fromEvent(this.getBtn.nativeElement, 'click').subscribe( ()=> {
this.fethcCntrId()
});

};

fethcId(){
this.id = Math.floor(Math.random() * 200 );
 this.data$ = this.http.get(`https://jsonplaceholder.typicode.com/todos/${this.id}`)
}
fethcCntrId(){
this.id = Math.floor(Math.random() * 200 );
 this.dataCntr$ = this.http.get(`https://jsonplaceholder.typicode.com/todos/${this.counter}`)
}

increment(){
  this.counter++
  this.decBtn.nativeElement.style.color = "green";
  this.incBtn.nativeElement.style.color = "green";
}
decrement(){
  if (this.counter === 0){
    this.decBtn.nativeElement.style.color = "red";
    return;
  }
  this.counter--
}

// fethcCntrId(){
// this.id = Math.floor(Math.random() * 200 );
//  this.data$ = this.http.get(`https://jsonplaceholder.typicode.com/todos/${this.id}`)
// }
}
