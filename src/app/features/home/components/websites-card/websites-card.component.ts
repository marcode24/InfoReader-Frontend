import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '@services/auth.service';

import { Website } from '@models/website.model';

import { UserService } from '@services/user.service';

@Component({
  selector: 'app-websites-card',
  templateUrl: './websites-card.component.html',
  styleUrls: ['./websites-card.component.css']
})
export class WebsitesCardComponent implements OnInit {
  @Input() websites: Website[];
  private isAuthenticated: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  subscribeWebsite(id: string){
    this.isAuthenticated = this.authService.isAuthenticated();
    if(this.isAuthenticated) {
      this.userService.modifyPreferences(id, 'subscription').subscribe(resp => {
        this.websites.map(website => {
          if( website._id === id)
            website.inUser = !website.inUser;
        });
      });
    }
  }

}