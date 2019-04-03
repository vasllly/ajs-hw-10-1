/* eslint-disable no-underscore-dangle */
export default class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this._attack = 10;
    this.defence = 40;
    this._stoned = false;
    this.distance = 1;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(bool) {
    this._stoned = bool;
  }

  get attack() {
    const attack = this._attack * (11 - this.distance) / 10;
    return this.stoned ? attack - Math.log2(this.distance) * 5 : attack;
  }

  set attack(distance) {
    this.distance = distance >= 1 ? distance : 1;
  }
}
