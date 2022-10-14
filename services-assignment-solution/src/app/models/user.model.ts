export class User {
  isActive: boolean;
  name: string;

  constructor(name: string, isActive: boolean = true) {
    this.isActive = isActive;
    this.name = name;
  }
}
