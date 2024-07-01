import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ListComponent } from './pages/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nome-do-projeto';
}
