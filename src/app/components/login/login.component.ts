import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imessage : string;
  constructor() { }
 ngOnInit() {
    this.imessage ='my custom message!!';
  }
}
