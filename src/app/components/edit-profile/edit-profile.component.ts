import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../../services/profile-service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  public hasUnsavedChanges = true;
  profileInfo!: Profile;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Call the timer function when the component initializes
    this.startTimer();

    this.activatedRoute.data.subscribe(({ profileInfo }) => {
      // do something with your resolved data ...
      this.profileInfo = profileInfo;
      //alert(JSON.stringify(profileInfo));
    });
  }

  startTimer() {
    // Set hasUnsavedChanges to false after 10 seconds
    setTimeout(() => {
      this.hasUnsavedChanges = false;
    }, 5000); // 10000 milliseconds = 10 seconds
  }
}
