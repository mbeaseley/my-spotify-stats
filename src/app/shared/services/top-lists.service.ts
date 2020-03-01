import { Injectable } from '@angular/core';
import { TopListsModelService } from '../models/top-lists-model.service';

@Injectable({
  providedIn: 'root'
})
export class TopListsService {

  constructor(private topArtistsModel: TopListsModelService) { }

  topLists(type: string, timeRange: string): any {
    return this.topArtistsModel.getTopLists(type, timeRange);
  }
}
