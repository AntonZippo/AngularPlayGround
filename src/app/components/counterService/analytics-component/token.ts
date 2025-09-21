import { InjectionToken } from "@angular/core";

export interface Analytics {
    trackAnalytics() : string;
}

export const Token = new InjectionToken<Analytics>('Analytics');