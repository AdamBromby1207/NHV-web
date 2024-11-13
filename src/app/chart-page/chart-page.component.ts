import {Component, OnInit} from "@angular/core";
import {GanttChartComponent} from "../shared/gantt-chart/gantt-chart.component";

@Component({
  standalone: true,
  selector: 'chart-page',
  templateUrl: 'chart-page.component.html',
  styleUrls: ['chart-page.component.scss'],
  imports: [
    GanttChartComponent
  ]
})
export class ChartPageComponent implements OnInit {

  ngOnInit() {

  }
}
