import {
  Component,
  OnInit,
  Inject,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ToolboxService } from '../toolbox.service';
import { Toolbox } from '../../models/toolbox';
import { Observable } from 'rxjs';
import { ToolService } from 'src/app/tool/tool.service';
import { Tool } from 'src/app/models/tool';
import { CraftsmanService } from 'src/app/craftsman/craftsman.service';
import { Craftsman } from 'src/app/models/craftsman';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
})
export class ToolboxComponent implements OnInit {
  @Input() toolbox: Toolbox;
  @Output() delete: EventEmitter<number> = new EventEmitter(true);
  @Output() edit: EventEmitter<number> = new EventEmitter(true);

  public tools$: Observable<Tool[]>;
  public craftsman$: Observable<Craftsman>;

  constructor(
    private service: ToolboxService,
    private craftsmanService: CraftsmanService
  ) {}

  ngOnInit(): void {
    if (this.toolbox.ownerId) {
      this.craftsman$ = this.craftsmanService.getCraftsman(
        this.toolbox.ownerId
      );
    }
    this.tools$ = this.service.getToolboxContents(this.toolbox.id);
  }

  public onEditClick(): void {
    this.edit.emit(this.toolbox.id);
  }

  public onDeleteClick(): void {
    this.delete.emit(this.toolbox.id);
  }
}
