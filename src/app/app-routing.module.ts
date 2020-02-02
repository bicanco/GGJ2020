import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EndGameComponent } from './end-game/end-game.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PlayComponent } from './play/play.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'end-game/:team', component: EndGameComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'play/:mode', component: PlayComponent },
  { path: 'start', component: StartComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
