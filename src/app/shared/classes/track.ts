import * as clone from 'clone';
import * as dayjs from 'dayjs';
import { Artist } from './artist';

export class Track {
  id: string;
  trackName: string;
  trackImage: string;
  artists: Artist[];
  played: dayjs.Dayjs;
  uri: string;

  constructor() {}

  clone(): Track {
    return clone(this);
  }
}
