import { Component } from '@angular/core';
import { TodosService } from './service/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  service = new TodosService();
  title = 'FE0222B-progetto-settimana10';
}
