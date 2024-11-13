import {Component, OnInit} from "@angular/core";
import {MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardTitleGroup} from "@angular/material/card";
import {MenuComponent} from "../menu/menu.component";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {RouterOutlet} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTooltipModule} from "@angular/material/tooltip";
import {HeaderComponent} from "../header/header.component";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";

@Component({
  standalone: true,
  templateUrl: 'project-card.component.html',
  styleUrls: ['project-card.component.scss'],
  selector: "project-card",
  imports: [
    MenuComponent,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavModule,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTooltipModule,
    HeaderComponent,
    MatCardModule,
    CardModule,
    DividerModule,
  ]
})
export class ProjectCardComponent implements OnInit {
  ngOnInit() {

  }

  navigateToProject() {
  }
}
