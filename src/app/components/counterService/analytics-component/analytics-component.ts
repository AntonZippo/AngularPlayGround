import { Component, inject } from '@angular/core';
import { Analytics } from '../../../services/analytics';
import { Weekendnalytics } from '../../../services/weekendanalytics';
import { Token } from './token';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-analytics-component',
  imports: [],
  templateUrl: './analytics-component.html',
  styleUrl: './analytics-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers : [ 
    {provide : Token,
      useFactory: ()=> {
        const today = new Date().getDay();
        return (today === 0 || today === 6)
        ? new Weekendnalytics
        : new Analytics
      }
    }
  ]
})
export class AnalyticsComponent {
  message = inject(Token).trackAnalytics();
}
