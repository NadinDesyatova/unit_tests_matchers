export default class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health
  }

  health_status() {
    const status = this.health > 50 
    ? 'healthy' 
    : this.health >= 15 ? 'wounded' : 'critical';

  return status;
  }
}
