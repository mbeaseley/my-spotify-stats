import { Country } from './country';
import * as clone from 'clone';
import * as dayjs from 'dayjs';

export class User {
  id?: string;
  image: string;
  name: string;
  email: string;
  country: Country | string;
  followers: number;
  uri: string;
}

export class UserFollowings {
  id: string;
  name: string;
  popularity: number;
  genres: string[];
  image: string;
  followers: number;
  type: string;
  uri: string;
}

export class UserPlaylist {
  id: string;
  name: string;
  description: string;
  image: string;
  public: boolean;
  owner: User;
  collaborative: boolean;
  uri: string;
}

export class Artist {
  id: string;
  artistName: string;
  artistImage: string;
  externalLink: string;
  order: number;

  constructor() {}

  clone(): Artist {
    return clone(this);
  }
}

export class Track {
  id: string;
  trackName: string;
  trackDuration: number;
  trackImage: string;
  artists: Artist[];
  played: dayjs.Dayjs;
  uri: string;

  constructor() {}

  clone(): Track {
    return clone(this);
  }
}
