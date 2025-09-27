import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  standalone : true,
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() imageUrl: String = '';
  @Input() title: String = '';
  @Input() description: String = '';
  @Input() age: String = '';
  @Input() seasons: String = '';
  @Input() tags: String = '';

  @Output() previewMovie = new EventEmitter<any>();

  hoverTimeout: any;

  onMouseEnter() {
    this.hoverTimeout = setTimeout(() => {
      this.previewMovie.emit({
        imageUrl: this.imageUrl,
        title: this.title,
        description: this.description,
        age: this.age,
        seasons: this.seasons,
        tags: this.tags
      });
    }, 8000); // 8 seconds
  }

  onMouseLeave() {
    clearTimeout(this.hoverTimeout);
    //this.previewMovie.emit(null);
  }
}
