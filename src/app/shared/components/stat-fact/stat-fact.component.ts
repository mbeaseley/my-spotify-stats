import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StatFactService } from 'Shared/services/stat-fact.service';

@Component({
  selector: 'app-stat-fact',
  templateUrl: './stat-fact.component.html',
  styleUrls: ['./stat-fact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatFactComponent implements OnInit {
  factShow: boolean = false;
  statFact: string;

  constructor(private statFactService: StatFactService) { }

  /**
   * on click change
   */
  onClick(): void {
    this.factShow = !this.factShow;
  }

  /**
   * On init
   */
  ngOnInit(): Promise<void> {
    return this.statFactService.getRandomFact().then(stringOutput => {
      this.statFact = stringOutput;
    });
  }
}
