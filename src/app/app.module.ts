import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EndGameComponent } from './end-game/end-game.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PlayComponent } from './play/play.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HowToPlayComponent,
    StartComponent,
    PlayComponent,
    EndGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
