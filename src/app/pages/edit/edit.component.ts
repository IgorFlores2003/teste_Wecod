import { Component } from '@angular/core';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { FormsComponent } from '../../components/forms/forms.component';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ButtonsComponent,FormsComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

}
