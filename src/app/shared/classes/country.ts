import * as clone from 'clone';

export class Country {
  name: string;
  nativeName: string;
  code: string;

  constructor(code?: string) {
    this.code = code;
  }

  clone(): Country {
    return clone(this);
  }
}
