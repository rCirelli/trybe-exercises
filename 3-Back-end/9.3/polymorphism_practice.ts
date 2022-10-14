abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  public talk(): void {
    console.log('melee character is talking');
  }

  public specialMove(): void {
    console.log('melee character is punching');
  }
}

class RangedCharacter extends Character {
  public talk(): void {
    console.log('ranged character is talking');
  }

  public specialMove(): void {
    console.log('ranged character is shooting');
  }
}

function actions(character: Character) {
  character.talk();
  character.specialMove();
}

const melee = new MeleeCharacter();
const ranged = new RangedCharacter();
actions(melee);
actions(ranged);
