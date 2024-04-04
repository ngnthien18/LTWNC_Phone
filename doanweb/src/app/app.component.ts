import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DuLieuService } from './du-lieu.service';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dulieuService: DuLieuService) {}
  advertisements = [
    {
      image: 'url-to-your-ad-image-1.jpg',
      alt: 'Advertisement 1'
    },
    {
      image: 'url-to-your-ad-image-2.jpg',
      alt: 'Advertisement 2'
    },
  ]
  
}


