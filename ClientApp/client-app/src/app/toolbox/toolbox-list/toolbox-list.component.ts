import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Toolbox } from '../toolbox';
import { ToolboxService } from '../toolbox.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-toolbox-list',
  templateUrl: './toolbox-list.component.html',
  styleUrls: ['./toolbox-list.component.scss'],
})
export class ToolboxListComponent implements OnInit {
  public toolboxes$: Observable<Toolbox[]>;

  constructor(private service: ToolboxService) {}

  ngOnInit(): void {
    this.toolboxes$ = this.service.fetchAll().pipe();
  }
}
