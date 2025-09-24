import { Routes } from '@angular/router';
import { Rx } from './components/RXJS/rx/rx';
import { Home } from './components/home/home';
import { TodoId } from './components/todo-id/todo-id';
import { WeekendGuard } from './services/weekend-guard';

export const routes: Routes = [

{
 path : 'todo',
 component : Rx
},
{
    path : 'todo/:id',
    component : TodoId
},
{
 path : 'home',
 component : Home 
},
{
 path : 'weekend',
 loadComponent : () => import('./components/weekend-text/weekend-text').then(m => m.WeekendText),
 canMatch : [WeekendGuard]
}

];
