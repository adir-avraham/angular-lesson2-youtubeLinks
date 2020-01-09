import { Component } from "@angular/core";
//import links from './links';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: "app-links-list",
  templateUrl: "./links-list.component.html",
  styleUrls: ["./links-list.component.css"]
})
export class AppLinksList {
  public links: Array<any>;
  public playingSrc: string;
  public like: string;

  constructor() {
    this.links = [
      {
        name: "The Dark Knight",
        link: "https://www.youtube.com/embed/EXeTwQWrcwY",
        isSelected: false
      },
      {
        name: "The Lord Of The Rings",
        link: "https://www.youtube.com/embed/r5X-hFf6Bwo",
        isSelected: false
      },
      {
        name: "The Joker",
        link: "https://www.youtube.com/embed/zAGVQLHvwOY",
        isSelected: false
      }
    ];
    this.playingSrc = "https://www.youtube.com/embed/x0LfLbQ4v2c";
    this.like = "Like"
  }

  deleteLink = (name) => {
    const filteredArray = this.links.filter(link => link.name !== name);
    return this.links = filteredArray;
  }

  playLink = (link) => {
     this.playingSrc = link;
  }

  selectLink(link: any) {
    link.isSelected = !link.isSelected;
    this.like = link.isSelected ? "Unlike" : "Like"; 
}

}