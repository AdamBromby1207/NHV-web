import {Component, inject, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";

@Component({
  standalone: true,
  templateUrl: 'document-upload.component.html',
  styleUrls: ['document-upload.component.scss'],
  selector: 'doc-upload'
})
export class DocumentUploadComponent implements OnInit {
  private store = inject(Store);

  ngOnInit() {

  }
}
