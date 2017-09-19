import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InstagramService} from "../../services/instagram.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-component',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private insta: InstagramService) {
      this.route.fragment.subscribe((fragment: string) => {
          this.insta.setActiveToken(fragment.split('=')[1]);
          this.router.navigate(['/feed']);
      });

  }

  ngOnInit() {
  }

}


