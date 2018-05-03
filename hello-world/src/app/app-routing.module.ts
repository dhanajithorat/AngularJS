import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SearchComponent } from './search/search.component';
import { CrashDetailComponent } from './crash-detail/crash-detail.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'heroes', component:HeroesComponent },
  { path:'detail/:id', component:HeroDetailComponent },
  { path: 'posts', component:PostsComponent },
  { path: 'post/:id', component:PostDetailComponent },
  { path: 'crashes', component:SearchComponent},
  { path: 'Crash/:id', component:CrashDetailComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
