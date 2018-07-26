import {Fighter} from './fighter';

// Class ImprovedFighter
export class ImprovedFighter extends Fighter {
  constructor(name, power, health) {
    super(name, power, health);
  }

  doubleHit(enemy, point){
    let doublePoint = point * 2;
    console.log(`${enemy.name} double hit: ${doublePoint}`);
    super.hit(enemy, doublePoint)
  }
}
