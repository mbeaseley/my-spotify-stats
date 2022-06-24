import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'Shared/services/storage.service';
import { Artist, Track, User, UserFollowings, UserPlaylist } from 'Shared/classes/user';
import {
  ArtistsApi,
  FollowingsApi,
  MeApi,
  PlaylistsApi,
  TopListTimeRange,
  TracksApi,
} from 'Shared/classes/api-typings/user';
import { Country } from 'Shared/classes/country';
import { CountryService } from 'Shared/services/country.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserModelService {
  private spotifyUrl = 'https://api.spotify.com/v1/me';

  constructor(private storageService: StorageService, private http: HttpClient) {}

  private fromPayload(response: MeApi): User {
    const user = new User();
    user.id = response.id;
    user.name = response.display_name;
    user.email = response.email;
    user.image = response.images?.[0].url;
    user.country = response.country;
    user.followers = response.followers?.total;
    user.uri = response.uri;

    return user;
  }

  /**
   * Get spotify user
   * @returns
   */
  public getUser(): Promise<User> {
    return firstValueFrom(
      this.http.get<MeApi>(`${this.spotifyUrl}`, {
        headers: {
          Authorization: `Bearer ` + this.storageService.getLocalStorageItem(),
        },
      }),
    ).then((res) => this.fromPayload(res));
  }

  /**
   * Format response correctly
   * @param res
   * return UserFollowings[]
   */
  private fromFollowingsPayload(res: FollowingsApi): UserFollowings[] {
    return res.artists.items.map((i) => {
      const f = new UserFollowings();
      f.id = i.id;
      f.name = i.name;
      f.popularity = i.popularity;
      f.genres = i.genres;
      f.image = i.images?.[0].url;
      f.followers = i.followers.total;
      f.type = i.type;
      f.uri = i.uri;
      return f;
    });
  }

  /**
   * Get User followings list
   * @returns
   */
  public getUserFollowings(): Promise<UserFollowings[]> {
    return firstValueFrom(
      this.http.get<FollowingsApi>(`${this.spotifyUrl}/following`, {
        headers: {
          Authorization: `Bearer ` + this.storageService.getLocalStorageItem(),
        },
        params: {
          type: 'artist',
        },
      }),
    ).then((res) => this.fromFollowingsPayload(res));
  }

  /**
   * Format payload correctly
   * @param res
   * @returns UserPlaylist[]
   */
  fromPlaylistPayload(res: PlaylistsApi): UserPlaylist[] {
    return res.items.map((i) => {
      const p = new UserPlaylist();
      p.id = i.id;
      p.name = i.name;
      p.description = i.description;
      p.image = i.images?.[0].url;
      p.public = i.public;
      p.owner = this.fromPayload(i.owner);
      p.collaborative = i.collaborative;
      p.uri = i.uri;
      return p;
    });
  }

  /**
   * Get user playlists
   * @returns UserPlaylist[]
   */
  public getUserPlaylists(): Promise<UserPlaylist[]> {
    return firstValueFrom(
      this.http.get<PlaylistsApi>(`${this.spotifyUrl}/playlists`, {
        headers: {
          Authorization: `Bearer ` + this.storageService.getLocalStorageItem(),
        },
      }),
    ).then((res) => this.fromPlaylistPayload(res));
  }

  /**
   * Format payload correctly
   * @param res
   * @returns Artist[]
   */
  fromArtistPayload(res: ArtistsApi): Artist[] {
    return res.items.map((x, i) => {
      const artist = new Artist();
      artist.id = x.id;
      artist.artistName = x.name;
      artist.artistImage = x.images?.[0].url;
      artist.externalLink = x.uri;
      artist.order = i + 1;
      return artist;
    });
  }

  /**
   * Get user top tracks or artists
   * @param type
   * @param timeRange
   * @returns
   */
  public getUserTopArtists(timeRange: TopListTimeRange, limit = 50): Promise<Artist[]> {
    return firstValueFrom(
      this.http.get<ArtistsApi>(`${this.spotifyUrl}/top/artists`, {
        headers: {
          Authorization: `Bearer ` + this.storageService.getLocalStorageItem(),
        },
        params: {
          time_range: timeRange,
          limit,
        },
      }),
    ).then((res) => this.fromArtistPayload(res));
  }

  /**
   * Format payload correctly
   * @param res
   * @returns Track[]
   */
  fromTracksPayload(res: TracksApi): Track[] {
    return res.items.map((x, i) => {
      const track = new Track();
      track.id = x.id;
      track.trackName = x.name;
      track.trackImage = x.album?.images?.[0].url;
      track.artists = x.artists.map((a) => {
        const artistObj = new Artist();
        artistObj.id = a.id;
        artistObj.artistName = a.name;
        artistObj.externalLink = a.external_urls.spotify;
        return artistObj;
      });
      track.uri = x.uri;
      return track;
    });
  }

  /**
   * Get user top tracks or artists
   * @param type
   * @param timeRange
   * @returns
   */
  public getUserTopTracks(timeRange: TopListTimeRange, limit = 50): Promise<Track[]> {
    return firstValueFrom(
      this.http.get<TracksApi>(`${this.spotifyUrl}/top/tracks`, {
        headers: {
          Authorization: `Bearer ` + this.storageService.getLocalStorageItem(),
        },
        params: {
          time_range: timeRange,
          limit,
        },
      }),
    ).then((res) => this.fromTracksPayload(res));
  }
}
