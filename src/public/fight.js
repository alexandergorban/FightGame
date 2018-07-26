// create async function fight
export async function fight(fighter, improvedFighter, ...points) {
  console.log(`Fighter: ${fighter.name}`);
  console.log(`ImprovedFighter: ${improvedFighter.name}`);
  console.log('Start fight()');

  for (let i = 0; i < points.length; i++){
    console.log(`Point: ${i} - ${points[i]}`);

    if (i%2 === 0){
      fighter.hit(improvedFighter, points[i]);

      if (improvedFighter.health <= 0){
        console.log(`ImprovedFighter ${improvedFighter.name} knockout() with health ${improvedFighter.health}`);
        await improvedFighter.knockout();
        break;
      }
    } else {
      improvedFighter.doubleHit(fighter, points[i]);

      if (fighter.health <= 0){
        console.log(`ImprovedFighter ${fighter.name} knockout() with health ${fighter.health}`);
        await fighter.knockout();
        break;
      }
    }
  }
}
