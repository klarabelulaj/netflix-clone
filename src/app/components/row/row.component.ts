import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-row',
  imports: [CommonModule, MovieCardComponent],
  standalone:true,
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {

  @Input() title: String = '';
  @Input() movies: { imageUrl: String; title: String; age: String; description: String; seasons: String; tags: String; }[] = [];

  @Output() previewMovie = new EventEmitter<any>(); 

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  handlePreviewMovie(movie: any) { 
    this.previewMovie.emit(movie);
  }

}
