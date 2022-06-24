import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from 'Shared/classes/country';

@Injectable({
  providedIn: 'root',
})
export class CountryModelService {
  constructor(private http: HttpClient) {}

  private fromPayload(response: any): Country {
    const country = new Country();
    country.name = response.name;
    country.nativeName = response.nativeName;
    country.code = response.alpha2Code;
    return country;
  }

  convertCountryInitials(initial: string): Promise<any> {
    return this.http
      .get(`https://restcountries.com/v2/alpha?codes=${initial}`)
      .toPromise()
      .then((res) => {
        return this.fromPayload(res[0]);
      });
  }
}
