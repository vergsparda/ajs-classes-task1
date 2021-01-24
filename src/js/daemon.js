import Character from './character';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defense = 40;
  }
}

const mok = new Daemon('Мок');
console.log(mok);
