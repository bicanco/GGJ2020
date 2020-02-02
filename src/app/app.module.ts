import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { services } from '@services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EndGameComponent } from './end-game/end-game.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PlayComponent } from './play/play.component';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HowToPlayComponent,
    StartComponent,
    PlayComponent,
    EndGameComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ...services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
