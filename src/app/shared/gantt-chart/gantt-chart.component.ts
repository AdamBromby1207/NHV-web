import { Component, OnInit } from "@angular/core";
import { GanttAllModule } from "@syncfusion/ej2-angular-gantt";
import { NgIf } from "@angular/common";
import { DropdownModule } from "primeng/dropdown";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.scss'],
  standalone: true,
  selector: 'gantt-chart',
  imports: [
    GanttAllModule,
    NgIf,
    DropdownModule,
    ReactiveFormsModule,
  ]
})
export class GanttChartComponent implements OnInit {
  public data: object[] = [
    {
      TaskID: 1,
      TaskName: 'Project Initiation',
      StartDate: new Date('04/02/2024'),
      EndDate: new Date('04/21/2024'),
      subtasks: [
        { TaskID: 2, TaskName: 'Identify Site Location', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
        { TaskID: 3, TaskName: 'Perform Soil Test', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
        { TaskID: 4, TaskName: 'Soil Test Approval', StartDate: new Date('04/02/2024'), Duration: 4, Progress: 50 },
      ]
    },
    {
      TaskID: 5,
      TaskName: 'Project Estimation',
      StartDate: new Date('04/02/2024'),
      EndDate: new Date('04/21/2024'),
      subtasks: [
        { TaskID: 6, TaskName: 'Develop Floor Plan', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
        { TaskID: 7, TaskName: 'List Materials', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 },
        { TaskID: 8, TaskName: 'Estimation Approval', StartDate: new Date('04/04/2024'), Duration: 3, Progress: 50 }
      ]
    }
  ];

  public taskFields: object = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };

  public splitterSettings: object = {
    columnIndex: 2
  };

  ngOnInit() {
    // Additional initialization if needed
  }
}
