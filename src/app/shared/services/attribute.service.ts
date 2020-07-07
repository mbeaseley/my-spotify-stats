import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  constructor() { }

  updatePageState(stateName: string): void {
    document.body.setAttribute('ui-state', stateName);
  }
}
