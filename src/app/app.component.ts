import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./shared/header/header.component";
import {NgIf} from "@angular/common";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  route = inject(Router)
  title = 'nhv-web';

  ngOnInit() {
    console.log('this.route.activatedRoute', this.route.url)


  }
}
