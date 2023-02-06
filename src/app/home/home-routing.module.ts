import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseByLanguageComponent } from './browse-by-language/browse-by-language.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MyListComponent } from './my-list/my-list.component';
import { NewpopularComponent } from './newpopular/newpopular.component';
import { TvShowComponent } from './tv-show/tv-show.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'movie',
    component: MovieComponent,
  },
  {
    path: 'browselang',
    component: BrowseByLanguageComponent,
  },
  {
    path: 'tv-show',
    component: TvShowComponent,
  },
  {
    path: 'my-list',
    component: MyListComponent,
  },
  {
    path: 'new-popular',
    component: NewpopularComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
