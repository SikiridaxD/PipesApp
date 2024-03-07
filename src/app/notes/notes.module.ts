import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class NotesModule { }
