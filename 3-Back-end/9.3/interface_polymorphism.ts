interface ICharacter {
  name: string;
  specialMove: string;
}

interface IdbCharacter extends ICharacter {
  id: number;
}

interface IModel {
  createChar(char: ICharacter): IdbCharacter;
  getChar(id: number):ICharacter;
  updateChar(id: number, char: ICharacter): ICharacter;
  deleteChar(id: number):void;
}

// const db: IdbCharacter[] = [];

class LocalDbModel implements IModel {
  private static _nextId: number = 0;
  private static _characters: IdbCharacter[] = [];

  public get db() {
    return LocalDbModel._characters;
  }
  
  public createChar({name, specialMove}: ICharacter): IdbCharacter {
    LocalDbModel._nextId++;
    const id = LocalDbModel._nextId;
    const newChar = { name, specialMove, id };
    LocalDbModel._characters.push(newChar);

    return newChar;
  }

  public getChar(id: number): ICharacter {
    const result = LocalDbModel._characters.find((char: IdbCharacter) => char.id === id);
    return result as ICharacter;
  }

  public updateChar(id: number, char: ICharacter): ICharacter {
    const result = LocalDbModel._characters.map((dbChar: IdbCharacter) => {
      if (dbChar.id === id) return {...char, id};
      return dbChar;
    });
    LocalDbModel._characters = result as IdbCharacter[];
    return char;
  }

  public deleteChar(id: number): void {
    const result = LocalDbModel._characters.filter((dbChar: IdbCharacter) => dbChar.id !== id);
    LocalDbModel._characters = result as IdbCharacter[];
  }
}

class CharacterService {
  constructor(private db: IModel) {}

  public create(char: ICharacter): IdbCharacter {
    const result = this.db.createChar(char);
    return result;
  }

  public get(id: number): ICharacter {
    const result = this.db.getChar(id);
    return result;
  }

  public update(id: number, char: ICharacter): ICharacter {    
    const result = this.db.updateChar(id, char);
    return result;
  }

  public exclude(id: number): void {
    this.db.deleteChar(id);
  }
}

const db = new LocalDbModel();
const service = new CharacterService(db);
service.create({name: 'teste', specialMove: 'socão'});
service.create({name: 'teste2', specialMove: 'socão xablau'});
console.log(db.db);
console.log(service.get(2));
service.update(2, {name: 'cirelli', specialMove: 'socão xablau'});
console.log(db.db);
service.exclude(2);
console.log(db.db);
