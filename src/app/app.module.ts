import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './instagram/signin/signin.component';
import { FeedComponent } from './Instagram/feed/feed.component';
import { PostComponent } from './Instagram/post/post.component';
import {Routes, RouterModule} from '@angular/router';
import {InstagramService} from './services/instagram.service';
import {RedirectComponent} from './instagram/redirect/redirect.component';
import {JsonpModule} from '@angular/http';

const appRoutes: Routes = [
    { path: 'signin', component: SigninComponent},
    { path: 'redirect', component: RedirectComponent},
    { path: 'feed', component: FeedComponent},
    { path: 'post', component: PostComponent},
    { path: '**', redirectTo: 'signin'}
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    FeedComponent,
    PostComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
      JsonpModule,
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [InstagramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
