import { User } from './user';

export class Playlist {
  id: string;
  name: string;
  description: string;
  public: boolean;
  owner: User;
  uri: string;

  constructor() {}
}
