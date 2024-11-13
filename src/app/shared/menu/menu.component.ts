import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import { MatSidenavModule } from '@angular/material/sidenav'
import {NgForOf, NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {AccordionModule} from "primeng/accordion";

@Component({
  standalone: true,
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
  selector: 'app-menu',
  imports: [
    MatSidenavModule,
    RouterOutlet,
    NgIf,
    NgForOf,
    AccordionModule,
  ],
})
export class MenuComponent implements OnInit {
  menuItems = ['Home', 'Tq Register', 'Master Document Register'];
  @Output() closeSidebarOut: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {

  }

  closeSidebar(event: Event) {
    this.closeSidebarOut.emit(event)
  }

}
