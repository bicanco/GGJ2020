import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teams } from '@utils';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent implements OnInit {

  protected title: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    switch (this.activatedRoute.snapshot.params.team) {
      case Teams.Guardians.toString():
        this.title = `The <strong>GUARDIANS</strong> repaired history!`;
        break;
      case Teams.Thieves.toString():
        this.title = `The <strong>THIEVES</strong> stole time!`;
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }

}
