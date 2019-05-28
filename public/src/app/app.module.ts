import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopleftComponent } from './topleft/topleft.component';
import { ToprightComponent } from './topright/topright.component';
import { BotleftComponent } from './botleft/botleft.component';
import { BotrightComponent } from './botright/botright.component';
import { MainComponent } from './main/main.component';
import { HttpService } from './http.service';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TopleftComponent,
    ToprightComponent,
    BotleftComponent,
    BotrightComponent,
    MainComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
