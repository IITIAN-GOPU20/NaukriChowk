import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ROLE_TOGGLE_SWITCH_MAP } from './constant';
import { UserRole } from '../../models/enum';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent implements OnInit {
  @Output() modeChanged: EventEmitter<UserRole> = new EventEmitter<UserRole>();
  constructor() { }

  ngOnInit(): void {
  }


  toggleMode(event: any) {
    console.log(event.target)
    const isChecked = event.target.checked;
    if (isChecked) {
      // Checkbox is checked, user is a company
      this.modeChanged.emit(ROLE_TOGGLE_SWITCH_MAP.Company);
    } else {
      // Checkbox is unchecked, user is a student
      this.modeChanged.emit(ROLE_TOGGLE_SWITCH_MAP.Student);
    }
  }


}
