import { Country } from './country';

export class User {
  id?: string;
  image: string;
  name: string;
  email: string;
  country: Country | string;
  followers: number;
  uri: string;

  constructor() {}
}
