import * as clone from 'clone';

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
