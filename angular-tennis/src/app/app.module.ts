import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TennisComponent } from './tennis/tennis.component';
import { ScorePipe } from './score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TennisComponent,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
