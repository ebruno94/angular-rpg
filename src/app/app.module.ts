import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CharacterCreateComponent } from './character-create/character-create.component';
import { FightComponent } from './fight/fight.component';
import { CharacterDisplayComponent } from './character-display/character-display.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterCreateComponent,
    FightComponent,
    CharacterDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
