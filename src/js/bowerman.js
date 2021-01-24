import Character from './character';

export default class Bowerman extends Character {
  constructor(name, type = 'Bowerman') {
    super(name, type);
    this.attack = 25;
    this.defense = 25;
  }
}
