import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  nav_content: Array<Object>;

  constructor() { }

  ngOnInit(): void {
    this.nav_content = [{
        men: {
          name: "Topwear",
          types: [
            "T-Shirts",
            "Casual Shirts",
            "Formal Shirts",
            "Sweatshirts",
            "Sweaters",
            "Jackets",
            "Blazers & Coats",
            "Suits",
            "Rain Jackets"
          ]
        },
        women : {
          name: "Innerwear",
          types: [
            "Bra",
            "Panty",
            "Lingerie"
          ]
        },
        kids : {
          name: "Toys",
          types: [
            "Aeroplane",
            "Helicopter",
            "Cars"
          ]
        },
        others : {
          name: "Electronics",
          types: [
            "Phone",
            "Earphones",
            "Headphones"
          ]
        }
      }
    ]
  }

}
