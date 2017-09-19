import { Component, OnInit } from '@angular/core';
import {InstagramService} from '../../services/instagram.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private insta: InstagramService) {
  }

  getFeed(){
      this.insta.getFeed().then(value => {
          console.log(value);
      })
          .catch(err => {
              console.log(err);
          });
  }

  ngOnInit() {

  }

}
