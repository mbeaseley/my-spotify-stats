import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'Shared/classes/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnChanges {
  @Input() user: User;
  userUri: string;
  userImage: string;
  objectKeys = Object.keys;

  constructor() { }

  /**
   * on click - open spotify uri link
   * @param spotifyUri  - uri link
   */
  onClick(spotifyUri: string): void {
    window.open(spotifyUri, '_blank');
  }

  /**
   * On changes
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (this.user) {
      this.userUri = this.user.uri;
      this.userImage = this.user.image;
      delete this.user.id;
      delete this.user.image;
      delete this.user.uri;
    }
  }
}
