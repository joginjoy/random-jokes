import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) {
  }

  getRandomJoke(): Observable<any> {
    return this.http.get(environment.JOKES_API + '/random-joke');
  }
}
