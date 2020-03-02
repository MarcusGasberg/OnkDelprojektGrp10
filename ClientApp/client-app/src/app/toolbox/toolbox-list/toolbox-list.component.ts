import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Toolbox } from '../toolbox';
import { ToolboxService } from '../toolbox.service';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-toolbox-list',
  templateUrl: './toolbox-list.component.html',
  styleUrls: ['./toolbox-list.component.scss']
})
export class ToolboxListComponent implements OnInit {
  public toolboxes$: Observable<Toolbox[]>;

  constructor(private service: ToolboxService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.toolboxes$ = this.service.fetchAll().pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        this.snackBar.open(`Something went wrong, status: ${err.status} ${err.statusText}`);
      }
      return of([]);
    }));
  }
}
