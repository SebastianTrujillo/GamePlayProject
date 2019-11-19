import { Component, OnInit, HostBinding } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  movies: any = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMovies().subscribe(
      res => {
        this.movies = res;
      },
      err => console.error(err)
    );
  }

}
