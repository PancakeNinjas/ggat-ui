import {Component} from '@angular/core';
import {ArenaMatchService} from '../services/arena-match.service';
import {Match} from '../models/match';

@Component({
  selector: 'app-match-history-table',
  templateUrl: './match-history-table.component.html',
  styleUrls: ['./match-history-table.component.scss'],
})
export class MatchHistoryTableComponent {
  matchHistory: Match[];
  columnsToDisplay: string[] = ['date', 'win', 'team', 'enemyTeam', 'rating', 'enemyRating'];

  constructor(private arenaMatchService: ArenaMatchService) {
    this.matchHistory = this.arenaMatchService.getMatches();
  }

  classes = {
    1: {name: 'Warrior', icon: 'warrior'},
    2: {name: 'Paladin', icon: 'paladin'},
    3: {name: 'Hunter', icon: 'hunter'},
    4: {name: 'Rogue', icon: 'rogue'},
    5: {name: 'Priest', icon: 'priest'},
    6: {name: 'Death Knight', icon: 'deathknight'},
    7: {name: 'Shaman', icon: 'shaman'},
    8: {name: 'Mage', icon: 'mage'},
    9: {name: 'Warlock', icon: 'warlock'},
    10: {name: 'Monk', icon: 'monk'},
    11: {name: 'Druid', icon: 'druid'},
    12: {name: 'Demon Hunter', icon: 'demonhunter'}
  };

  specializations = {
    62: {name: 'Arcane'},
    63: {name: 'Fire'},
    64: {name: 'Frost'},
    65: {name: 'Holy'},
    66: {name: 'Protection'},
    70: {name: 'Retribution'},
    71: {name: 'Arms'},
    72: {name: 'Fury'},
    73: {name: 'Protection'},
    102: {name: 'Balance'},
    103: {name: 'Feral'},
    104: {name: 'Guardian'},
    105: {name: 'Restoration'},
    268: {name: 'Brewmaster'},
    269: {name: 'Windwalker'},
    270: {name: 'Mistweaver'},
    250: {name: 'Blood'},
    251: {name: 'Frost'},
    252: {name: 'Unholy'},
    253: {name: 'Beast Mastery'},
    254: {name: 'Marksmanship'},
    255: {name: 'Survival'},
    256: {name: 'Discipline'},
    257: {name: 'Holy'},
    258: {name: 'Shadow'},
    259: {name: 'Assassination'},
    260: {name: 'Outlaw'},
    261: {name: 'Subtlety'},
    262: {name: 'Elemental'},
    263: {name: 'Enhancement'},
    264: {name: 'Restoration'},
    265: {name: 'Affliction'},
    266: {name: 'Demonology'},
    267: {name: 'Destruction'},
    577: {name: 'Havoc'},
    581: {name: 'Vengeance'}
  };
}
