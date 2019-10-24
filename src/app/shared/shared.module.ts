import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
