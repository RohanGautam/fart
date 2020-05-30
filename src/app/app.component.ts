import { Component, OnInit } from '@angular/core';
const syllable = require('syllable');
// import { syllable } from 'syllable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  syllableCount: Array<number>;

  constructor() {}

  ngOnInit() {}

  getSyllables(sentence: string) {
    this.syllableCount = [];
    sentence.split(' ').forEach((word) => {
      this.syllableCount.push(syllable(word));
    });
  }
}
