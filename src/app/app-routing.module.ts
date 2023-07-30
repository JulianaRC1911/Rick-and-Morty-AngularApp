import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './modules/characters/characters.component';
import { LocationsComponent } from './modules/locations/locations.component';
import { EpisodesComponent } from './modules/episodes/episodes.component';
import { CharacterDetailComponent } from './modules/character-detail/character-detail.component';
import { EpisodeDetailComponent } from './modules/episode-detail/episode-detail.component';
import { LocationDetailComponent } from './modules/location-detail/location-detail.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterDetailComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:id', component: LocationDetailComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episodes/:id', component: EpisodeDetailComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
