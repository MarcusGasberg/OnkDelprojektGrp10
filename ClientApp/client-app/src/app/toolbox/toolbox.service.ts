import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Toolbox } from './toolbox';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Tool } from '../models/tool';

@Injectable({
  providedIn: 'root',
})
export class ToolboxService {
  private readonly apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  public fetchAll(): Observable<Toolbox[]> {
    return this.httpClient.get<Toolbox[]>(`${this.apiUrl}/toolboxes`);
  }

  public fetchToolbox(id: number): Observable<Toolbox> {
    return this.httpClient.get<Toolbox>(`${this.apiUrl}/toolboxes/${id}`);
  }
}
