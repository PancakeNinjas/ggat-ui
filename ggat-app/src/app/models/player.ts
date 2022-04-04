export class Player {
  constructor(
    public name: string,
    public playerClass: number,
    public specialization: number,
    public damageDone: number,
    public healingDone: number,
    public killingBlows: number,
    public rating: number,
    public ratingDelta: number
  ) {
  }

  static deserialize(input: any): Player {
    if (!input) {
      throw new Error('Deserialize Player requires input.');
    }

    return new Player(
      input.name,
      input.playerClass,
      input.specialization,
      input.damageDone,
      input.healingDone,
      input.killingBlows,
      input.rating,
      input.ratingDelta
    );
  }
}
