import * as clone from 'clone';

export class Artist {
  id: string;
  artistName: string;
  externalLink: string;

  constructor() {}

  clone(): Artist {
    return clone(this);
  }
}
