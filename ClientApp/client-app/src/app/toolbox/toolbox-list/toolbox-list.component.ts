import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Toolbox } from '../../models/toolbox';
import { ToolboxService } from '../toolbox.service';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-toolbox-list',
  templateUrl: './toolbox-list.component.html',
  styleUrls: ['./toolbox-list.component.scss'],
})
export class ToolboxListComponent implements OnInit {
  public toolboxes$: BehaviorSubject<Toolbox[]> = new BehaviorSubject([]);

  constructor(private service: ToolboxService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getToolboxes();
  }

  public onToolboxDelete(id: number): void {
    this.service
      .deleteToolbox(id)
      .subscribe({ next: () => this.getToolboxes() });
  }

  public onToolboxEdit(id: number): void {
    throw new Error('Method not implemented.');
  }

  private getToolboxes() {
    this.service
      .getAll()
      .pipe(catchError(err => this.handleError(err)))
      .subscribe(toolboxes => this.toolboxes$.next(toolboxes));
  }

  handleError(err: any): Observable<Toolbox[]> {
    if (err instanceof HttpErrorResponse) {
      this.snackBar.open(
        `Something went wrong, status: ${err.status} ${err.statusText}`,
        null,
        { duration: 5000 }
      );
    }
    return of(new Array<Toolbox>());
  }
}
