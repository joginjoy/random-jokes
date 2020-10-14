import {Component} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {JokeService} from './services/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Random Jokes';

  update = false;

  aRandomJoke: any;
  error: string;

  constructor(private updates: SwUpdate,
              private jokeService: JokeService) {

    this.updates.available.subscribe(u => this.update = true);
  }

  fetchRandomJoke(): void {
    this.jokeService.getRandomJoke().subscribe(
      joke => {
        this.error = '';
        this.aRandomJoke = joke.content;
      },
      err => this.error = JSON.stringify(err)
    );
  }

}
