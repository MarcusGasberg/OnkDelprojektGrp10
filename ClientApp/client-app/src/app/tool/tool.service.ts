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

  public fetchAll(): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>(`api/tools`);
  }
}
