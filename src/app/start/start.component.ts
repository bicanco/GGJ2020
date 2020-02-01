import { Component, OnInit } from '@angular/core';
import { GameModes } from '@utils';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  readonly gameModes = GameModes;

  constructor() { }

  ngOnInit() {
  }

}
