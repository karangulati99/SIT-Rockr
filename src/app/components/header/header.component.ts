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
        Genre: {
          name: "Albums",
          types: [
            "Rock",
            "Pop",
            "Jazz",
            "Soul Soothers",
            "Romantic",
            "Instrumental",          ]
        },
        Language : {
          name: "Break the Barrier",
          types: [
            "English",
            "Hindi",
            "Punjabi",
            "Marathi",
            "Gujrati",
            "Spanish",
                      ]
        },
        Mood : {
          name: "Playlist",
          types: [
            "Sufi",
            "Party",
            "Good Vibes",
            "Workout",
            "Drive Out",
          ]
        },
        Charts : {
          name: "Popular",
          types: [
            "Top 10",
            "Top 25",
            "Top 50",
            "Top 100",
            "Top English",
            "Top Hindi",
          ]
        }
      }
    ]
  }

}