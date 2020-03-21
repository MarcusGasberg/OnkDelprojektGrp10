import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, take, filter } from 'rxjs/operators';
import { Tool } from '../models/tool';

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>(`api/tools`);
  }

  public getTool(id: number): Observable<Tool> {
    return this.httpClient.get<Tool>(`api/tools/${id}`);
  }

  public postTool(tool: Tool): Observable<Tool> {
    return this.httpClient.post<Tool>(`api/tools`, tool);
  }

  public putTool(tool: Tool): Observable<any> {
    return this.httpClient.put(`api/tools/${tool.id}`, tool);
  }

  public deleteTool(id: number): Observable<any> {
    return this.httpClient.delete(`api/tools/${id}`);
  }
}
