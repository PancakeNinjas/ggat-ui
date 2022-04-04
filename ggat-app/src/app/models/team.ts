import {Player} from './player';
import {deserializeArray} from '../../utils/deserialization-utils';

export class Team {
  constructor(
    public mmr: number,
    public players: Player[]
  ) {
  }

  static deserialize(input: any): Team {
    if (!input) {
      throw new Error('Deserialize Team requires input.');
    }

    return new Team(
      input.mmr,
      deserializeArray(input.players, Player.deserialize)
    );
  }
}

