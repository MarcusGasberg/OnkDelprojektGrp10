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
    // return this.httpClient.get<Tool[]>(`api/tool`);
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

}
