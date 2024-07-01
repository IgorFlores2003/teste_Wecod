import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { TableComponent } from '../../components/table/table.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent{

}