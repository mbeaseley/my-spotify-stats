import { User } from './user';

export class Playlist {
  id: string;
  name: string;
  description: string;
  public: boolean;
  owner: User;
  collaborative: boolean;
  uri: string;

  constructor() {}
}
