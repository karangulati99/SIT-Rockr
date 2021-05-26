import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../shared/environment';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

  get headers() {
    return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${environment.access_token}`});
  }

    
  getToken(){
    const body = new HttpParams()
    .set('grant_type', 'client_credentials');

    return this.http.post('https://accounts.spotify.com/api/token',
    body.toString(),
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization',  `Basic ${btoa("0981b593eaab4cefa5839fec4f4fc93e:efcd50cf07304fd5a5c9ab77ee2a0004")}`)
    }
  ).toPromise().then((res: any) => {
    console.log(res);  
    environment.access_token = res.access_token;  
    return res;    
  })
  }

  getAlbums() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10&country=IN', {
          headers: this.headers
        }).toPromise().then(res => {
          return res;
        })
  }

  getAlbum(url){
    return this.http.get(url, {
      headers: this.headers
    }).toPromise().then(res => {
      return res;
    })
  }

  contact(payload){
    let formData: FormData = new FormData();
    formData.append('email', payload.email);
    formData.append('name', payload.name);
    formData.append('message', payload.message);
    formData.append('Phone_no', payload.phone);

    return this.http.post('https://testbackend123.pythonanywhere.com/message/', formData)
    .toPromise().then((res: any) => {
      console.log(res);  
      return res;    
    })
  }
}
