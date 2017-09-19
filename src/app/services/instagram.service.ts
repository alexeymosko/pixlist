import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Jsonp, BaseRequestOptions, RequestOptions } from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class InstagramService {
  token = null;
  clientId = '9ae38646fc524bce8e7e5fefe0fe8ebb';
  photos = [];
  photosPerRequest = 5;
  lastLoadedId = null;
  constructor(private router: Router, private jsonp: Jsonp) {

  }

  login() {
      window.open('https://instagram.com/oauth/authorize/?client_id=' + this.clientId +
          '&redirect_uri=http://' + window.location.host + '/redirect' +
          '&response_type=token');
      console.log(window.location.host);
  }
  setActiveToken(newtoken) {
    this.token = newtoken;
    console.log(this.token);
  }
  getFeed() {
      console.log("Inside getFeed()");
      if (!this.token) {
          this.router.navigate(['/singin']);
          return;
      }
      console.log('https://api.instagram.com/v1/users/self/?callback=callbackFunction&access_token=' + this.token);
      return this.jsonp.request('https://api.instagram.com/v1/users/self/?callback=callbackFunction&access_token='
          + this.token)
          .map(res => res)
          .toPromise();

  }
}

