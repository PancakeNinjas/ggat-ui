import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ArenaMatchService {

  constructor() { }

   getMatches(){
    let matchHistory = [
      {
        date: 1607763784000,
        team:[{name: "Balance Druid", class: "druid"}, {name: "Shadow Priest", class: "priest"}],
        enemyTeam:[{name: "Subtlety Rogue", class: "rogue"}, {name: "Fury Warrior", class: "warrior"}],
        rating: 1245,
        enemyRating: 1125,
        win: true,
        ratingChange: 24
      },
      {
        date: 1607764785000,
        team:[{name: "Balance Druid", class: "druid"}, {name: "Shadow Priest", class: "priest"}],
        enemyTeam:[{name: "Restoration Shaman", class: "shaman"}, {name: "Retribution Paladin", class: "paladin"}],
        rating: 1270,
        enemyRating: 1347,
        win: false,
        ratingChange: 12
      },
      {
        date: 1608765786000,
        team:[{name: "Balance Druid", class: "druid"}, {name: "Shadow Priest", class: "priest"}],
        enemyTeam:[{name: "Frost Deathknight", class: "deathknight"}, {name: "Windwalker Monk", class: "monk"}],
        rating: 1258,
        enemyRating: 1355,
        win: true,
        ratingChange: 15
      }
    ]

    console.log("matchHistory");
    console.log(matchHistory);
    return matchHistory;

  }

}
