import {Component, inject, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {MatButton} from "@angular/material/button";
@Component({
  standalone: true,
  selector: "app-login",
  templateUrl: 'login.component.html',
  imports: [
    MatButton
  ],
  styleUrls: ['login.component.scss']
})


export class LoginComponent implements OnInit {
  router = inject(Router)
  ngOnInit() {
    console.log('login-component')
  }

  login() {
    this.router.navigate(['/projects']);
  }
}
