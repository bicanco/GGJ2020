import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModes, Teams } from '@utils';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {

  protected started: boolean;
  protected currentMission = 1;
  protected score: { thieves: number, guardians: number } = {
    thieves: 0,
    guardians: 0,
  };
  protected teams = Teams;
  private victoriesToWin: number;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    switch (this.activatedRoute.snapshot.params.mode) {
      case GameModes.Fast.toString():
        this.victoriesToWin = 2;
        break;
      case GameModes.Regular.toString():
        this.victoriesToWin = 3;
        break;
      case GameModes.Legend.toString():
        this.victoriesToWin = 4;
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }

  protected completeMission(winner: Teams) {
    this.currentMission++;
    this.started = false;
    switch (winner) {
      case Teams.Guardians:
        this.score.guardians++;
        if (this.score.guardians === this.victoriesToWin) {
          this.router.navigate(['end-game', Teams.Guardians]);
        }
        break;
      case Teams.Thieves:
        this.score.thieves++;
        if (this.score.thieves === this.victoriesToWin) {
          this.router.navigate(['end-game', Teams.Thieves]);
        }
        break;
    }
  }

}
