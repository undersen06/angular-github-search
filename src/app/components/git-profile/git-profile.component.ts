import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Injectable } from '@angular/core';
import { forkJoin } from '../../../../node_modules/rxjs';



@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent {
  username: string = '';
  user = null;
  repos = null;

  constructor(private _githubService: GithubService) { }

  

  searchGitUser() {
    forkJoin(
      this._githubService.getGitHubProfile(this.username),
      this._githubService.getGithubRepos(this.username)).subscribe((_data) => {
        console.log(_data[1].json());
        this.user = _data[0].json();
        this.repos = _data[1].json();
      },(_error)=>{
        console.log(_error);
      });
    
  }

}
