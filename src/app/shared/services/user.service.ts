import { Injectable } from '@angular/core';
import { UserModelService } from 'Shared/models/user-model.service';
import { Artist, Track, User, UserFollowings, UserPlaylist } from 'Shared/classes/user';
import { TopListTimeRange } from 'Shared/classes/api-typings/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private userModelService: UserModelService) {}

  /**
   * Get spotify user
   * @returns User
   */
  public getUser(): Promise<User> {
    return this.userModelService.getUser();
  }

  /**
   * Get spotify user followings
   */
  public getFollowings(): Promise<UserFollowings[]> {
    return this.userModelService.getUserFollowings();
  }

  /**
   * Get spotify user playlists
   */
  public getPlaylists(): Promise<UserPlaylist[]> {
    return this.userModelService.getUserPlaylists();
  }

  /**
   * Get spotify user top artists
   */
  public getTopArtists(timeRange: TopListTimeRange, limit?: number): Promise<Artist[]> {
    return this.userModelService.getUserTopArtists(timeRange, limit);
  }

  /**
   * Get spotify user top tracks
   */
  public getTopTracks(timeRange: TopListTimeRange, limit?: number): Promise<Track[]> {
    return this.userModelService.getUserTopTracks(timeRange, limit);
  }
}
