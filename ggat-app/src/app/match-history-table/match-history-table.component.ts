import {Component, OnInit} from '@angular/core';
import {ArenaMatchService} from "../services/arena-match.service";

@Component({
  selector: 'app-match-history-table',
  templateUrl: './match-history-table.component.html',
  styleUrls: ['./match-history-table.component.scss']
})
export class MatchHistoryTableComponent implements OnInit {

  matchHistory: any[];
  columnsToDisplay: string[] = ['date', 'team', 'enemyTeam', 'rating', 'enemyRating', 'win', 'ratingChange'];

  constructor(private arenaMatchService: ArenaMatchService) {
    this.matchHistory = this.arenaMatchService.getMatches();
  }

  ngOnInit(): void {
  }

}
