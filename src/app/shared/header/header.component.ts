import {Component, OnInit} from "@angular/core";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  imports: [
    MatIcon
  ],
  selector: 'app-header'
})
export class HeaderComponent implements OnInit {
  ngOnInit() {

  }
}
