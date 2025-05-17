import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  // @Input() rating: number = 0;
  @Input() isReadOnly : boolean = false;

private _rating: number = 0;

@Input() set rating(value: number) {
  this._rating = value;
  this.roundedRating = Math.round(value); // You can also use Math.floor() or Math.ceil()
}

get rating() {
  return this._rating;
}

roundedRating = 0;
}
