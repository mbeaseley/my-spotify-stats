import * as dayjs from 'dayjs';
import { Track } from './track';
import { User } from './user';

export class PlaylistTrack {
  addedAt: dayjs.Dayjs;
  addedBy: User;
  track: Track;

  constructor() {}
}
