import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tool } from 'src/app/models/tool';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
})
export class ToolComponent implements OnInit {
  @Input() tool: Tool;
  @Output() delete: EventEmitter<number> = new EventEmitter(true);
  @Output() edit: EventEmitter<number> = new EventEmitter(true);

  constructor() {}

  ngOnInit(): void {}

  public onEditClick(): void {
    this.edit.emit(this.tool.id);
  }

  public onDeleteClick(): void {
    this.delete.emit(this.tool.id);
  }
}
