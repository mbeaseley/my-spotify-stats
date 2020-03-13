import * as dayjs from 'dayjs';
import { Track } from './track';
import { User } from './user';
import * as clone from 'clone';
export class PlaylistTrack {
  addedAt: dayjs.Dayjs;
  addedBy: User;
  track: Track;

  constructor() {}

  clone(): PlaylistTrack {
    return clone(this);
  }
}
