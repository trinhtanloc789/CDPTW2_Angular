import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module15',
  templateUrl: './module15.component.html',
  styleUrls: ['./module15.component.css']
})
export class Module15Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = "Doing the right thing, at the right time." ;
  imgcheck = "./assets/images_15/15-2.png";
  arrNum = [{id:1, num : "15" , cmt :"STAFF"},{id:2, num :"100",cmt :"TOURS"},{id:3, num :"47", cmt :"PACKAGES"},{id:4, num :"10", cmt :"SERVICES"}];

}
