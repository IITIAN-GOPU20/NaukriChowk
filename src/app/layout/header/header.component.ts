import { Component, HostListener, OnInit } from '@angular/core';
import './nav.js';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  


  isToggle: boolean = false;

  toggle_bar() {
    // this.isToggle = !this.isToggle;
  }

  navbg:any;
  @HostListener('document:scroll') scrollover(){


    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#000000'
      }
    }else
    {
        this.navbg = {}
    }
  }

}
