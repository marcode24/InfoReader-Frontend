import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ComponentsModule } from '@components/components.module';

import { FeedModule } from './feed/feed.module';
import { WebsiteModule } from './website/website.module';
import { AuthModule } from 'app/auth/auth.module';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    InfiniteScrollModule,
    FeedModule,
    WebsiteModule,
    AuthModule
  ]
})
export class FeaturesModule { }
