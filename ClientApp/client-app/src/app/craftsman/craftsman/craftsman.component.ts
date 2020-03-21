import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Craftsman } from 'src/app/models/craftsman';

@Component({
  selector: 'app-craftsman',
  templateUrl: './craftsman.component.html',
  styleUrls: ['./craftsman.component.scss'],
})
export class CraftsmanComponent implements OnInit {
  @Input() craftsman: Craftsman;
  @Output() delete: EventEmitter<number> = new EventEmitter(true);
  @Output() edit: EventEmitter<number> = new EventEmitter(true);

  constructor() {}

  ngOnInit(): void {}

  public onEditClick(): void {
    this.edit.emit(this.craftsman.id);
  }

  public onDeleteClick(): void {
    this.delete.emit(this.craftsman.id);
  }
}
