import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toolbox } from '../models/toolbox';
import { Observable, of } from 'rxjs';
import { Tool } from '../models/tool';

@Injectable({
  providedIn: 'root',
})
export class ToolboxService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Toolbox[]> {
    return this.httpClient.get<Toolbox[]>(`api/toolboxes`);
  }

  public getToolbox(id: number): Observable<Toolbox> {
    return this.httpClient.get<Toolbox>(`api/toolboxes/${id}`);
  }

  public getToolboxContents(id: number): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>(`api/toolboxes/${id}/tools`);
  }

  public postToolbox(toolbox: Toolbox): Observable<Toolbox> {
    return this.httpClient.post<Toolbox>(`api/toolboxes`, toolbox);
  }

  public putToolbox(toolbox: Toolbox): Observable<any> {
    return this.httpClient.put(`api/toolboxes/${toolbox.id}`, toolbox);
  }

  public deleteToolbox(id: number): Observable<any> {
    return this.httpClient.delete(`api/toolboxes/${id}`);
  }
}
