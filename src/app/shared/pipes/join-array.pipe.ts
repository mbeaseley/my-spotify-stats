import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from 'Shared/classes/artist';

@Pipe({
  name: 'joinArray'
})
export class JoinArrayPipe implements PipeTransform {

  transform(artists: Artist[]): string {
    if (!artists) {
      return '';
    }

    const artistNames = artists.map(artist => {
      return artist.artistName;
    });

    return artistNames.join(', ');
  }

}
