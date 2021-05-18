import { Injectable } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public spotify: SpotifyService
  ) { }

  canActivate(){
    this.spotify.getToken().then((res) => {
      if(res.access_token)
        return true;
      else
        return false;
    })
  }
}
