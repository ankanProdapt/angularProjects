import { Component } from '@angular/core';
import { Player } from './model/player';
import { Game } from './model/game';
import { Match } from './model/match';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.css']
})
export class TennisComponent {
  player1: Player = new Player("Amy");
  player2: Player = new Player("Nick");
  match: Match = new Match(this.player1, this.player2);

  p1Score: number = 0;
  p2Score: number = 0;
  p1Games: number = 0;
  p2Games: number = 0;
  p1Sets: number = 0;
  p2Sets: number = 0;

  update(pointToP1: boolean): void {
    this.match.updateMatch(pointToP1);
    [this.p1Score, this.p2Score] = this.match.getLatestSet().getLatestGame().getScores();
    [this.p1Games, this.p2Games] = this.match.getLatestSet().getScores();
    [this.p1Sets, this.p2Sets] = this.match.getScores();
  }

  reset(): void {
    this.match = new Match(this.player1, this.player2);
    [this.p1Score, this.p2Score] = [0, 0];
    [this.p1Games, this.p2Games] = [0, 0];
    [this.p1Sets, this.p2Sets] = [0, 0];
  }

  updatePlayers(p1Name: string, p2Name: string): void {
    this.player1.setName(p1Name);
    this.player2.setName(p2Name);
  }
}
