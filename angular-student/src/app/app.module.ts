import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from './date.pipe';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
    StudentDetailComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
