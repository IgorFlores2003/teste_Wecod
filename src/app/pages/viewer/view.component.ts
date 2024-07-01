import { Component } from '@angular/core';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { FormsComponent } from '../../components/forms/forms.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [ButtonsComponent, FormsComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

}
