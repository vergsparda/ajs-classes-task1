export default class Character {
  constructor(name, type, attack, defense) {
    if (typeof name === 'string' && name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Ваше имя слишком короткое или длинное');
    }
    if (type === 'Bowerman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
      this.type = type;
    } else {
      throw new Error('Введен неверный тип персонажа');
    }
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defense = defense;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack += Math.floor((this.attack / 100) * 20);
      this.defense += Math.floor((this.defense / 100) * 20);
    } else throw new Error('Трупу нельзя повысить уровень');
    return this;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defense / 100);
      return this;
    } throw new Error('Персонаж уже умер');
  }
}

const riki = new Character('riki', 'Undead', 30, 30);
console.log(riki);
console.log(riki.levelUp());
console.log(riki.damage(20));
