import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ResultsComponent],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
