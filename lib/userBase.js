class User {
    constructor(name) {
      this.name = name;
    };
  
  getName() { return this.name}
  
  getIntroduction() { return `Hi my name is ${this.name}!`}
  
  };
  
  const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
  ];
  
class UserBase{

}