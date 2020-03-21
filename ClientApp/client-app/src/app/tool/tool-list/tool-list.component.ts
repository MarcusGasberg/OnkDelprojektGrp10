import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tool } from 'src/app/models/tool';
import { ToolService } from '../tool.service';

@Component({
  selector: 'app-toolbox-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss'],
})
export class ToolListComponent implements OnInit {
  public tools$: BehaviorSubject<Tool[]> = new BehaviorSubject([]);

  constructor(private service: ToolService) {}

  ngOnInit(): void {
    this.getTools();
  }
  getTools() {
    this.service.getAll().subscribe(tools => this.tools$.next(tools));
  }

  public onDeleteTool(id: number): void {
    this.service.deleteTool(id).subscribe({
      next: this.getTools,
    });
  }

  public onEditTool(id: number): void {
    throw new Error('Not implemented yet.');
  }
}
