import { Component } from '@angular/core';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { FormsComponent } from '../../components/forms/forms.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonsComponent, FormsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
