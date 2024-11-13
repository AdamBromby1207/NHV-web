import {Component, inject, OnInit} from "@angular/core";
import {MenuComponent} from "../shared/menu/menu.component";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {NgFor, NgIf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {Router, RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeaderComponent} from "../shared/header/header.component";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitleGroup
} from "@angular/material/card";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import {ProjectCardComponent} from "../shared/project-card/project-card.component";

@Component({
  standalone: true,
  templateUrl: 'project-dashboard.component.html',
  styleUrls: ['project-dashboard.component.scss'],
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
    ProjectCardComponent,
  ],
  selector: 'project-dashboard'

})
export class ProjectDashboardComponent implements OnInit {
  router = inject(Router)
  sideNav: boolean = false;
  isSideNavOpened: boolean = false;


  ngOnInit() {
  }

  sidenavOpenedChange(opened: boolean) {
    this.isSideNavOpened = opened;
  }

  toggleRequest() {
    this.sideNav = !this.sideNav;
  }

  goToProject() {
    this.router.navigate(['/projectPage']);
  }

  newProject() {
  }
}
