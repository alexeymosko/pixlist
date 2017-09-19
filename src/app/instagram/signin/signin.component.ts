import { Component, OnInit } from '@angular/core';
import {InstagramService} from "../../services/instagram.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private insta: InstagramService) {

  }

  onLoginButtonClick() {
    console.log('onloginbuttonclick working');
    this.insta.login();
  }

  ngOnInit() {

  }

}
