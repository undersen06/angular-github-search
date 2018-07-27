import { Injectable } from '@angular/core';
import { Http} from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class GithubService {

  apiRoot:string = "http://api.github.com/users"

  constructor(private _http : Http) { }


  getGitHubProfile(userName){

    let url = `${this.apiRoot}/${userName}`;
    return this._http.get(url)

  }

  getGithubRepos(userName){

    let url = `${this.apiRoot}/${userName}/repos`;
    return this._http.get(url)


  }


}
