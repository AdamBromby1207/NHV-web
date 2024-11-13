import {Component, OnInit} from "@angular/core";
import {GanttChartComponent} from "../../shared/gantt-chart/gantt-chart.component";
import {TabMenuModule} from "primeng/tabmenu";
import {HeaderNavComponent} from "../../shared/header-nav/header-nav.component";

@Component({
  standalone: true,
  templateUrl: 'project-page.component.html',
  styleUrls: ['project-page.component.scss'],
  imports: [
    GanttChartComponent,
    TabMenuModule,
    HeaderNavComponent
  ],
  selector: 'project-page'
})
export class ProjectPageComponent implements OnInit {
  navItems = [{title: 'Chart', link : 'chart'}, {title: 'Master Doc Register', link : 'masterdr'}, {title: 'Labour', link : 'labour'}, {title: 'Document Upload', link : 'docupload'}, {title: 'TQ Register', link : 'TqRegister'}]
  ngOnInit() {

  }
}
