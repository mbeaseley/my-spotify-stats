import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'noSansitize'
})
export class NoSansitizePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(html: string): SafeHtml {
     return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

}
