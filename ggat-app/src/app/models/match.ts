export class Match {
  constructor(
    public date: string,
    public team: string[],
    public enemyTeam: string[],
    public rating: number,
    public enemyRating: number,
    public win: boolean,
    public ratingChange: number
  ) { }

  static deserialize(input: any): Match {
    if (!input) {
      throw new Error('Deserialize Match requires input.');
    }

    return new Match(
      input.date,
      input.team,
      input.enemyTeam,
      input.rating,
      input.enemyRating,
      input.win,
      input.ratingChange
    )
  }
}
