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
  audioFilePath = 'assets/fart-short.wav';
  wordPause = 500; //milliseconds
  syllablePause = 200;

  constructor() {}

  ngOnInit() {}

  private async delay(delayInms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

  getSyllables(sentence: string) {
    this.syllableCount = [];
    sentence.split(' ').forEach((word) => {
      this.syllableCount.push(syllable(word));
    });
    this.fartTheSentence(this.syllableCount);
  }

  async fartTheSentence(syllables: Array<number>) {
    for (let index = 0; index < syllables.length; index++) {
      const syllable = syllables[index];
      if (syllable == 1) {
        this.playAudio(this.audioFilePath);
      } else if (syllable > 1) {
        for (let index = 0; index < syllable; index++) {
          this.playAudio(this.audioFilePath);
          if (index != syllable - 1) {
            await this.delay(this.syllablePause);
          }
        }
      }
      await this.delay(this.wordPause);
    }
  }

  playAudio(audioFilePath: string) {
    let audio = new Audio();
    audio.src = audioFilePath;
    audio.load();
    audio.play();
  }
}
