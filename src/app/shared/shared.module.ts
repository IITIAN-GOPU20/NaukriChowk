import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';



@NgModule({
  declarations: [
    ToggleSwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToggleSwitchComponent
  ]
})
export class SharedModule { }
