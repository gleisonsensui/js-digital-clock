'use strict';

export default class RelogioModel {
    constructor() {
        this._hours = 0;
        this._minutes = 0;
        this._seconds = 0;
    }

    get hours() {
        return this._hours
    }

    set hours(value) {
        this._hours = value;
    }

    get minutes() {
        return this._minuts
    }

    set minutes(value) {
        this._minuts = value;
    }

    get seconds() {
        return this._seconds
    }

    set seconds(value) {
        this._seconds = value;
    }
}