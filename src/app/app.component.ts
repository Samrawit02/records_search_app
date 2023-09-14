import { Component } from '@angular/core';
import { UserService } from './service/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent  {
  title = 'records_search_app';
}
