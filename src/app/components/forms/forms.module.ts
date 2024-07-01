import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsComponent } from './forms.component';
import { ButtonsComponent } from '../buttons/buttons.component';

@NgModule({
  declarations: [
    FormsComponent,
    ButtonsComponent  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonsComponent
  ],
  exports: [
    FormsComponent
  ],
  providers: [],
})
export class FormsModule { }
