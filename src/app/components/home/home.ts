import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { WeekendBypassGuard } from '../../services/weekend-bypass-guard';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  constructor (private Bypass : WeekendBypassGuard){}

  activateBypass(){
    this.Bypass.enableBypass(3000)
    
  }
}
