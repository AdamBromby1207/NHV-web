import {Component, OnInit} from "@angular/core";
import {GanttAllModule, GanttModule} from "@syncfusion/ej2-angular-gantt";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {DropdownModule} from "primeng/dropdown";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.scss'],
  standalone: true,
  selector: 'gantt-chart',
  imports: [
    GanttModule,
    NgIf,
    MatButtonModule,
    GanttAllModule,
    DropdownModule,
    ReactiveFormsModule,
    ]
})
export class GanttChartComponent implements OnInit {
  ngOnInit() {

  }
}
