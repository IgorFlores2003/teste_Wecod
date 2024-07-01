import { Routes } from '@angular/router';
import { RegisterComponent } from '../app/pages/register/register.component';
import {EditComponent} from './pages/edit/edit.component'
import { ViewComponent } from './pages/viewer/view.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path:'edit', component:EditComponent},
  { path:'viewer', component:ViewComponent},
  { path:'list' , component:ListComponent}
];

export default routes;
