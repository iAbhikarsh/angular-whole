import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loginreactive',
  templateUrl: './loginreactive.component.html',
  styleUrls: ['./loginreactive.component.css']
})
export class LoginreactiveComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
}
