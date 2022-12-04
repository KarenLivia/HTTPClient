import { Component, OnInit,  VERSION } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Repositórios do GitHub';

  constructor(public githubService: GithubService){}

  ngOnInit(){
    this.githubService.update();
  }

}
