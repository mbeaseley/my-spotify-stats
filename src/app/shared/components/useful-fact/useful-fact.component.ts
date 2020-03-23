import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useful-fact',
  templateUrl: './useful-fact.component.html',
  styleUrls: ['./useful-fact.component.scss']
})
export class UsefulFactComponent implements OnInit {
  factShow: boolean = false;

  constructor() { }

  /**
   * on click change
   */
  onClick(): void {
    this.factShow = !this.factShow;
  }

  ngOnInit(): void {}
}
