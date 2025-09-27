import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { RowComponent } from './components/row/row.component';
import { MOVIES } from './db-data';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HeaderComponent , BannerComponent , RowComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';

  selectedMovie: any = null;

  trendingMovies = [MOVIES[0], MOVIES[1],MOVIES[6],MOVIES[7],MOVIES[12],MOVIES[13],MOVIES[14],MOVIES[15],MOVIES[16]];
  
  dramaMovies = [MOVIES[2],MOVIES[3],MOVIES[8],MOVIES[9]];

  anime = [MOVIES[4],MOVIES[5],MOVIES[10],MOVIES[11]];


     

  updateBanner(movie: any) {   //ndryshimi banerit
    this.selectedMovie = movie;
  }


}
