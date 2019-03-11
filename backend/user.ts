export class User {
  constructor(public name: string, public email: string, public password: string) { }

  matches(another: User): boolean {
    return this.email === another.name && this.password === another.password;
  }
}

export const users = {
  'juliana@gmail.com': new User('Juliana', 'juliana@gmail.com', 'senha123'),
  'carlos@gmail.com': new User('Carlos', 'carlos@gmail.com', 'senha321'),
}

