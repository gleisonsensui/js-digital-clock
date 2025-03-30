'use strict';
import RelogioModel from './RelogioModel.js';

export default class RelogioController {
  constructor() {
    this.relogio = new RelogioModel();
    this.entryHours = document.querySelector('.hours');
    this.entryMinuts = document.querySelector('.minutes');
    this.entrySeconds = document.querySelector('.seconds');

    // Start digital clock
    this.updateValueClock();
  }


  updateValueClock() {
    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock() {
    this.entryHours.textContent = this.getToday().getHours();
    this.entryMinuts.textContent = this.getToday().getMinutes();
    this.entrySeconds.textContent = this.getToday().getSeconds();
  }

  getToday() {
    return new Date();
  }
}
