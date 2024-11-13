import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { NgForOf, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'header-nav',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    MatTabsModule,
    NgForOf,
    MatCardModule,
    NgIf,
  ],
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  @Input() navItems: { title: string; link: string; }[] =
    [];
}
