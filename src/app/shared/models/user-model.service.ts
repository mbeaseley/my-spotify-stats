import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { User } from '../classes/user';
import { Country } from 'Shared/classes/country';
import { CountryService } from 'Shared/services/country.service';

@Injectable({
  providedIn: 'root'
})
export class UserModelService {
  private spotifyUrl = 'https://api.spotify.com/v1/me';

  constructor(private storageService: StorageService, private http: HttpClient, private countryService: CountryService) {}

  private fromPayload(response: any): User {
    const user = new User();
    user.id = response.id;
    user.name = response.display_name;
    user.email = response.email;
    user.image = response.images[0].url;
    user.country = new Country();
    this.countryService.convertCountryInitials(response.country).then(res => {
      user.country = res && res.name ? res : response.country;
    });
    user.followers = response.followers.total;
    user.uri = response.uri;

    return user;
  }

  getUser(): Promise<any> {
    return this.http.get(`${this.spotifyUrl}`, {
      headers: {
        Authorization: `Bearer ` +  this.storageService.getLocalStorageItem()
      }
    }).toPromise().then(res => {
      return this.fromPayload(res);
    });
  }
}
