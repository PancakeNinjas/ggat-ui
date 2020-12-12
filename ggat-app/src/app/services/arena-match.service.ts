import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ArenaMatchService {

  constructor() { }

   getMatches(){
    let matchHistory = [
      {
        date: 1607766603,
        team:["Balance Druid", "Shadow Priest"],
        enemyTeam:["Subtlety Rogue", "Fury Warrior"],
        rating: 1245,
        enemyRating: 1125,
        win: true,
        ratingChange: 24
      },
      {
        date: 16077666998,
        team:["Balance Druid", "Shadow Priest"],
        enemyTeam:["Restoration Shaman", "Retribution Paladin"],
        rating: 1270,
        enemyRating: 1347,
        win: false,
        ratingChange: 12
      },
      {
        date: 16077678344,
        team:["Balance Druid", "Shadow Priest"],
        enemyTeam:["Frost Death Knight", "Windwalker Monk"],
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
