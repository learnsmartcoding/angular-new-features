import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { AppCounterComponent } from '../signals/app-counter/app-counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppCounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'angular-new-features';
}
