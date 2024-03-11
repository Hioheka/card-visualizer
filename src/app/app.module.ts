import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizerComponent } from './pages/visualizer/visualizer.component';
import { ZoomPhotoDialogComponent } from './pages/zoom-photo-dialog/zoom-photo-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, VisualizerComponent, ZoomPhotoDialogComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, MatDialogModule,MatToolbarModule,MatButtonModule, MatDialogModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
