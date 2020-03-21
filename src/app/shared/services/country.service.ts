import { Injectable } from '@angular/core';
import { CountryModelService } from 'Shared/models/country-model.service';
import { Country } from 'Shared/classes/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private countryModelService: CountryModelService) { }

  convertCountryInitials(inital: string): Promise<Country> {
    return this.countryModelService.convertCountryInitials(inital).then(res => {
      return res;
    });
  }
}
