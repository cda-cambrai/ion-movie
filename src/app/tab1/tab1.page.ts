import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  movies: any = [];

  constructor(private tmdb: TmdbService) {}

  ionViewWillEnter() {
    this.tmdb.getPopularMovies().then(movies => this.movies = movies['results']);
  }

}
