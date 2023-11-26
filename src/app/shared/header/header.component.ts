import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isCollapsed = false;
  @Output() collapseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.collapseEvent.emit(this.isCollapsed);
  }
}
