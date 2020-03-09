import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { tap, take, filter } from 'rxjs/operators';
import { Tool } from '../models/tool';

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  private readonly apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  public fetchAll(): Observable<Tool[]> {
    // return this.httpClient.get<Tool[]>(`${this.apiUrl}/tool`);
    return of([
      {
        model: 'lmao',
        type: 'Spanner',
        dateAcquired: new Date(),
        color: 'Red',
        make: 'God Knows',
        serialNumber: '123489530345',
      } as Tool,
      {
        model: 'lmao',
        type: 'Spanner',
        dateAcquired: new Date(),
        color: 'Red',
        make: 'God Knows',
        serialNumber: '123489530345',
      } as Tool,
      {
        model: 'lmao',
        type: 'Spanner',
        dateAcquired: new Date(),
        color: 'Red',
        make: 'God Knows',
        serialNumber: '123489530345',
      } as Tool,
    ]).pipe(tap(t => console.log(t)));
  }

  public getTool(id: number): Observable<Tool> {
    return of({
      model: 'lmao',
      type: 'Spanner',
      dateAcquired: new Date(),
      color: 'Red',
      make: 'God Knows',
      serialNumber: '123489530345',
    } as Tool);
  }
}
