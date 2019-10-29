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

 

  arrImg = [
    {id:1, img : "./assets/images_12/12-2.png", nameic : "Kids", cmtic : "FREE BUGGY"},
    {id:2, img : "./assets/images_12/12-3.png", nameic : "Drinks", cmtic : "ALL INCLUDED"},
    {id:3, img : "./assets/images_12/12-4.png", nameic : "Camp", cmtic : "CAROVAN INCLUDED"},
    {id:4, img : "./assets/images_12/12-5.png", nameic : "World", cmtic : "CUSTOM TOURS"}
  ];
}
