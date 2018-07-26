import {Fighter} from './fighter';
import {ImprovedFighter} from './improvedFighter';
import {fight} from './fight';

// create two instances
const fighter = new Fighter('FighterFirst', 50, 8000);
const improvedFighter = new ImprovedFighter('ImprovedFighterSecond', 40, 6000);

// call fight function
console.log('Start:');
fight(fighter, improvedFighter, 25, 13, 45, 12, 6, 20, 15, 16)
  .then(() => console.log("Finished!"));
