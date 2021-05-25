import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  albumList = [];
  

  constructor(
    public spotify: SpotifyService
  ) { }

  ngOnInit(): void {
    this.spotify.getToken().then((res) => {
      this.spotify.getAlbums().then((res: any) => {
        this.albumList = res.albums.items;
        console.log(this.albumList);  
      });      
    });
  }

  openAlbum(url){
    this.spotify.getAlbum(url.href).then((res: any) => {
      console.log("ALBUM: ", res.href);
      window.open(url.uri, "_blank");
    })
  }

}
