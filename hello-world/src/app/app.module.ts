import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { MatTableModule } from "@angular/material";
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientInMemoryWebApiModule, httpClientInMemBackendServiceFactory } from 'angular-in-memory-web-api';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostService } from './post.service';
import { SearchComponent } from './search/search.component';
import { CrashService } from './crash.service';
import { CrashDetailComponent } from './crash-detail/crash-detail.component';
//import { InMemoryDataService }  from './i'


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PostsComponent,
    PostDetailComponent,
    SearchComponent,
    CrashDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule, 
    AgGridModule.withComponents([]),
    NgbModule.forRoot()
  ],
  providers: [HeroService, MessageService, HttpModule, PostService, CrashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
