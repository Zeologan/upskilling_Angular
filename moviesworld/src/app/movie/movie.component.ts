import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  type = "";
  id = "";
  url = "";
  movies: any;
  movie: any;
  // review:any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies: any) => {
      this.movies = movies;
      let index = this.movies.findIndex((movie: { id: string; }) => movie.id == this.id);
      if (index > -1) {
        this.movie = this.movies[index];

        // ✅ Convert rating to number
        this.movie.rating = parseFloat(this.movie.rating);
        console.log('Movie rating (after parseFloat):', this.movie.rating, typeof this.movie.rating);


        // ✅ Convert each review rating to number
        if (this.movie.reviews?.length > 0) {
          this.movie.reviews = this.movie.reviews.map((review: any) => ({
            ...review,
            rating: parseFloat(review.rating)
          }));
        }
      }
    });
  }
}

