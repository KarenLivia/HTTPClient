import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  id: number;
  full_name: string;
}

@Injectable()
export class GithubService {
  repos: Array<Response> = [];

  constructor(private http: HttpClient) { }

  update() {
    this.http.get<Array<Response>>('https://api.github.com/users/larguesa/repos')
    .subscribe( data => {
      this.repos = data;
    });
  }

}