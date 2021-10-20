import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';
import { FormsModule } from '@angular/forms';
import { VideoComponent } from './video/video.component';
import { VideoPlayComponent } from './video-play/video-play.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    VideoComponent,
    VideoPlayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
