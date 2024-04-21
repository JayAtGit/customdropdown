// custom-dropdown.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class CustomDropdownComponent {
  @Input() options: string[] = [];
  @Output() optionSelected = new EventEmitter<string>();
  isOpen: boolean = false;
  selectedOption: string | undefined;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.optionSelected.emit(option);
  }
}
