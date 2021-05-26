import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.less']
})
export class ContactPageComponent implements OnInit {

  nameVal: string = "";
  emailVal: string = "";
  phoneVal: number;
  messageVal: string = "";

  constructor(
    public spotify: SpotifyService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let payload = {
      name: this.nameVal,
      email: this.emailVal,
      phone: this.phoneVal,
      message: this.messageVal
    }

    this.spotify.contact(payload).then((res) => {
      console.log("Contact ", res);
      alert("We've received your message, thank you!");
      this.router.navigate(['/home']);
    })
  }
}
