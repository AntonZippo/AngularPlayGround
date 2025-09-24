import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment } from '@angular/router';
import { WeekendBypassGuard } from './weekend-bypass-guard';

@Injectable({
  providedIn: 'root'
})
export class WeekendGuard implements CanMatch{
  constructor(private router : Router, private Bypass : WeekendBypassGuard){}

  canMatch(route: Route, segments: UrlSegment[]): boolean {
    const today = new Date().getDay();
    if (today === 0 || today === 6){
      return true
    }
    if (this.Bypass.bypass){
      return true
    }
    this.router.navigate(['/home'])
    return false
  }
}
