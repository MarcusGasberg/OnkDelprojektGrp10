import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toolbox } from './toolbox';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Tool } from '../models/tool';

@Injectable({
  providedIn: 'root',
})
export class ToolboxService {
  constructor(private httpClient: HttpClient) { }

  public fetchAll(): Observable<Toolbox[]> {
    return this.httpClient.get<Toolbox[]>(`api/toolboxes`);
  }

  public fetchToolbox(id: number): Observable<Toolbox> {
    return this.httpClient.get<Toolbox>(`api/toolboxes/${id}`);
  }

  public getToolboxContents(id: number): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>(`api/toolboxes/${id}/tools`);
  }
}
