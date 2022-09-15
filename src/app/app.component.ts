import {Component} from '@angular/core';
import { ComposeDBService } from './services/composeDB/compose-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authenticated: boolean = false;
  data: string[] | undefined;


  constructor(
    private composeDBService: ComposeDBService
  ) {
    this.composeDBService.test()
  }
}
