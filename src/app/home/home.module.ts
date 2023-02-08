import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from '../shared/component/home-header/home-header.component';
import { HomeFooterComponent } from '../shared/component/home-footer/home-footer.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TvShowComponent } from './tv-show/tv-show.component';
import { MovieComponent } from './movie/movie.component';
import { NewpopularComponent } from './newpopular/newpopular.component';
import { MyListComponent } from './my-list/my-list.component';
import { BrowseByLanguageComponent } from './browse-by-language/browse-by-language.component';
import { VideoPlayerComponent } from './video-player/video-player.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    TvShowComponent,
    MovieComponent,
    NewpopularComponent,
    MyListComponent,
    BrowseByLanguageComponent,
    VideoPlayerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
