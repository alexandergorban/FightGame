// Class Fighter
export default class Fighter {
  constructor(name, power, health) {
    this.name = name;
    this.power = power;
    this.health = health;
  }

  setDamage(damage){
    this.health -= damage;
    console.log(`Fighter: ${this.name} - health: ${this.health} (after damage: ${damage})`);
  }

  hit(enemy, point){
    let damage = this.power * point;
    console.log(`The Fighter ${this.name} hit the Fighter ${enemy.name} with the damage: ${damage}`);
    enemy.setDamage(damage);
  }

  knockout(){
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        console.log('knockout: Time is over! (500)');
        return resolve();
      }, 500);
    }));
  }
}
