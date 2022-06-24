import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { SharedModule } from 'Shared/shared.module';
import { StorageService } from 'Shared/services/storage.service';
import { UserService } from 'Shared/services/user.service';
import { Artist, Track, User, UserFollowings, UserPlaylist } from 'Shared/classes/user';
import { ErrorService } from 'Shared/services/error.service';
import { Error } from 'Shared/classes/error';
import { AttributeService } from 'Shared/services/attribute.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [CommonModule, SharedModule, LazyLoadImageModule],
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;
  userFollowings: UserFollowings[];
  userPlaylists: UserPlaylist[];
  publicPaylists: UserPlaylist[];
  userTopArtists: Artist[];
  userTopTracks: Track[];
  loading: boolean = true;

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private errorService: ErrorService,
    private attributeService: AttributeService,
  ) {}

  onUserLoad(): void {
    this.loading = false;
  }

  /**
   * On init
   */
  ngOnInit(): Promise<void> {
    this.attributeService.updatePageState('dashboard');

    return Promise.all([
      this.userService.getUser(),
      this.userService.getFollowings(),
      this.userService.getPlaylists(),
      this.userService.getTopArtists('long_term', 10),
      this.userService.getTopTracks('long_term', 10),
    ])
      .then(([user, followings, playlist, artists, tracks]) => {
        this.user = user;
        this.userFollowings = followings;
        this.userPlaylists = playlist;
        this.userTopArtists = artists;
        this.userTopTracks = tracks;

        this.publicPaylists = (this.userPlaylists || []).slice().filter((x) => x.public);
      })
      .catch(() => {
        this.storageService.removeLocalStorageItem();
        this.storageService.removeLocalStorageItem('access-token-date');
        setTimeout(() => {
          this.loading = false;
          const error = new Error(
            'Access Token Error',
            'Access token expired, new token is needed.',
          );
          return this.errorService.callError('', error);
        }, 100);
      });
  }
}
