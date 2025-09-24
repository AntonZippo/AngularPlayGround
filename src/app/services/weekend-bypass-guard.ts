import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class WeekendBypassGuard {
  private _bypass = new BehaviorSubject<boolean>(false);
  $bypass = this._bypass.asObservable();

  enableBypass(durationMs : number = 3000){

    this._bypass.next(true);

    setTimeout(() => this._bypass.next(false) , durationMs);
  }

  get bypass(){
    return this._bypass.value
  }
}
