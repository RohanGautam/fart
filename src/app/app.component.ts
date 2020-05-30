import { Component, OnInit } from '@angular/core';
const syllable = require('syllable');
// import { syllable } from 'syllable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getSyllables(word: string) {
    console.log(syllable(word));
  }
}
