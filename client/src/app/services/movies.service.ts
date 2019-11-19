import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(`${this.API_URI}/movies`);
  }

}
