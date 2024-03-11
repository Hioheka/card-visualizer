import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-zoom-photo-dialog',
  templateUrl: './zoom-photo-dialog.component.html',
  styleUrls: ['./zoom-photo-dialog.component.scss'],
})
export class ZoomPhotoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
  }
}
