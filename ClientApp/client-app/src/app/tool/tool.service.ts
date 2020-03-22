import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, take, filter } from 'rxjs/operators';
import { Tool } from '../models/tool';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ToolService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>(`${this.apiUrl}/tools`);
  }

  public getTool(id: number): Observable<Tool> {
    return this.httpClient.get<Tool>(`${this.apiUrl}/tools/${id}`);
  }

  public postTool(tool: Tool): Observable<Tool> {
    return this.httpClient.post<Tool>(`${this.apiUrl}/tools`, tool);
  }

  public putTool(tool: Tool): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/tools/${tool.id}`, tool);
  }

  public deleteTool(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/tools/${id}`);
  }
}
