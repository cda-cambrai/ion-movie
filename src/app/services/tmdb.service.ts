import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  apiKey = 'YOUR-API-KEY';

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key='+this.apiKey).toPromise();
  }
}
