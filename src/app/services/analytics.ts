import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Analytics {
  trackAnalytics(){
    return "Analytics is tracked"
  }
}
