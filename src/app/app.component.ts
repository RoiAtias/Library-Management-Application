import { Component } from '@angular/core';
import { MessageService } from 'primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService],
})
export class AppComponent {
  title = 'munters-angular-project';
}
