import {Injectable} from '@angular/core';
import {Match} from '../models/match';
import {deserializeArray} from '../../utils/deserialization-utils';

@Injectable({
  providedIn: 'root'
})

export class ArenaMatchService {

  getMatches(): Match[] {
    const matchHistory = deserializeArray([
      {
        datetime: 1607763784000,
        team: {
          mmr: 1500,
          players: [
            {
              name: 'Huzzari',
              playerClass: 11,
              specialization: 102,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 1,
              rating: 1323,
              ratingDelta: 30
            },
            {
              name: 'Vanillamilk',
              playerClass: 5,
              specialization: 258,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 1,
              rating: 1323,
              ratingDelta: 30
            }
          ],
        },
        enemyTeam: {
          mmr: 1600,
          players: [
            {
              name: 'Pikaboo',
              playerClass: 4,
              specialization: 261,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 0,
              rating: 1353,
              ratingDelta: 30
            },
            {
              name: 'Bajheera',
              playerClass: 1,
              specialization: 71,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 0,
              rating: 1323,
              ratingDelta: 30
            }
          ],
        },
        win: true,
        mapId: 123,
        season: 1,
        duration: 45,
        rated: true,
        arenaTeamSize: 2,
        id: 1111
      },
      {
        datetime: 1607864785000,
        team: {
          mmr: 1500,
          players: [
            {
              name: 'Huzzari',
              playerClass: 11,
              specialization: 102,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 1,
              rating: 1323,
              ratingDelta: 30
            },
            {
              name: 'Vanillamilk',
              playerClass: 5,
              specialization: 258,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 1,
              rating: 1323,
              ratingDelta: 30
            }
          ],
        },
        enemyTeam: {
          mmr: 1600,
          players: [
            {
              name: 'Cdew',
              playerClass: 7,
              specialization: 264,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 0,
              rating: 1353,
              ratingDelta: 30
            },
            {
              name: 'Mez',
              playerClass: 6,
              specialization: 252,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 0,
              rating: 1323,
              ratingDelta: 30
            }
          ],
        },
        win: false,
        mapId: 123,
        season: 1,
        duration: 45,
        rated: true,
        arenaTeamSize: 2,
        id: 1112
      },
      {
        datetime: 1607999796000,
        team: {
          mmr: 1500,
          players: [
            {
              name: 'Huzzari',
              playerClass: 11,
              specialization: 102,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 1,
              rating: 1323,
              ratingDelta: 30
            },
            {
              name: 'Vanillamilk',
              playerClass: 5,
              specialization: 258,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 1,
              rating: 1323,
              ratingDelta: 30
            }
          ],
        },
        enemyTeam: {
          mmr: 1600,
          players: [
            {
              name: 'Sodapoppin',
              playerClass: 11,
              specialization: 103,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 0,
              rating: 1353,
              ratingDelta: 30
            },
            {
              name: 'Venruki',
              playerClass: 8,
              specialization: 62,
              damageDone: 123456,
              healingDone: 123456,
              killingBlows: 0,
              rating: 1323,
              ratingDelta: 30
            }
          ],
        },
        win: true,
        mapId: 123,
        season: 1,
        duration: 45,
        rated: true,
        arenaTeamSize: 2,
        id: 1113
      }
    ], Match.deserialize);

    console.log("matchHistory");
    console.log(matchHistory);
    return matchHistory;

  }

}
