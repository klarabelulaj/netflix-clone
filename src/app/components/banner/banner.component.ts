import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  standalone : true,
  templateUrl: './banner.component.html',
  styleUrls:['./banner.component.css']

})
export class BannerComponent {

  @Input() movie: any = null;
}

