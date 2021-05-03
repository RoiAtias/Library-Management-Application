import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public loginInvalid: boolean;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    });
  }

  onSubmit(): void {
    this.loginInvalid = false;
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    if (this.form.valid) {
      try {
        this.router.navigate(['book-list'])
      } catch (err) {
        this.loginInvalid = true;
      }
    } 
  }

}
