import {Team} from './team';

export class Match {
  constructor(
    public datetime: string,
    public team: Team,
    public enemyTeam: Team,
    public win: boolean,
    public mapId: number,
    public season: number,
    public duration: number,
    public rated: boolean,
    public arenaTeamSize: number,
    public id: number,
  ) {
  }

  static deserialize(input: any): Match {
    if (!input || typeof input !== 'object') {
      throw new Error('Deserialize Match requires input.');
    }

    return new Match(
      input.datetime,
      Team.deserialize(input.team),
      Team.deserialize(input.enemyTeam),
      input.win,
      input.mapId,
      input.season,
      input.duration,
      input.rated,
      input.arenaTeamSize,
      input.id,
    );
  }
}
