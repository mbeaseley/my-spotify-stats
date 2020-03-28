import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  year: number;

  constructor() { }

  /**
   * On init
   */
  ngOnInit(): void {
    this.year = dayjs().year();
  }

}
