export default class Character {
  constructor(attack, defence) {
    this.attack = attack;
    this.defence = defence;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    } else {
      const error = new Error('ХП должно быть выше 0');
      throw error.message;
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      const error = new Error('ХП должно быть выше 0');
      throw error.message;
    }
  }
}

// const newCharater = new Character(50, 40, 550, 4);
// newCharater.damage(115);
// newCharater.levelUp();
// console.log(newCharater);
