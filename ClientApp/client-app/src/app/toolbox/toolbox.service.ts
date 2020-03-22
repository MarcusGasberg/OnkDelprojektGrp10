import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toolbox } from '../models/toolbox';
import { Observable, of } from 'rxjs';
import { Tool } from '../models/tool';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ToolboxService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Toolbox[]> {
    return this.httpClient.get<Toolbox[]>(`${this.apiUrl}/toolboxes`);
  }

  public getToolbox(id: number): Observable<Toolbox> {
    return this.httpClient.get<Toolbox>(`${this.apiUrl}/toolboxes/${id}`);
  }

  public getToolboxContents(id: number): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>(`${this.apiUrl}/toolboxes/${id}/tools`);
  }

  public postToolbox(toolbox: Toolbox): Observable<Toolbox> {
    return this.httpClient.post<Toolbox>(`${this.apiUrl}/toolboxes`, toolbox);
  }

  public putToolbox(toolbox: Toolbox): Observable<any> {
    return this.httpClient.put(
      `${this.apiUrl}/toolboxes/${toolbox.id}`,
      toolbox
    );
  }

  public deleteToolbox(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/toolboxes/${id}`);
  }
}
