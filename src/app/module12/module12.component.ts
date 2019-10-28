import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module12',
  templateUrl: './module12.component.html',
  styleUrls: ['./module12.component.css']
})
export class Module12Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = "Facilities";
  content = "LOREM IPSUM DOLOR SIT AMET, CONSECTETURADIPISCING ELIT. DONEC AT LIGULA IN LIGULA ULTRICESVULPUTATE AT AC SAPIEN. IN JUSTO NEQUE, MALESUADAA LIBERO ET, LOREM IPSUM DOLOR SIT AMET,CONSECTETUR ADIPISCING ELIT" ;
  content_btn = "READ MORE" ;

  img2 = './assets/images/12-2.png' ;
  img3 = './assets/images/12-3.png' ;
  img4 = './assets/images/12-4.png' ;
  img5 = './assets/images/12-5.png' ;

  nameic1 = "Kids" ;
  nameic2 = "Drinks" ;
  nameic3 = "Camp" ;
  nameic4 = "World" ;

  cmtic1 = "FREE BUGGY";
  cmtic2 = "ALL INCLUDED";
  cmtic3 = "CAROVAN INCLUDED";
  cmtic4 = "CUSTOM TOURS";
}
