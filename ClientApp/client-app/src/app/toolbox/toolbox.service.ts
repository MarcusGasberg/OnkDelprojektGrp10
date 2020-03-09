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
  constructor(private httpClient: HttpClient) {}

  public fetchAll(): Observable<Toolbox[]> {
    //return this.httpClient.get<Toolbox[]>(`${this.apiUrl}/toolbox`);
    return of([
      {
        model: 'lmao',
        id: 123,
        make: 'Some make',
        serialNumber: '134234',
        color: 'green',
        dateAcquired: new Date(2000, 3, 3, 10, 42),
      } as Toolbox,
    ]).pipe(tap(t => console.log(t)));
  }

  public getToolbox(id: number): Observable<Toolbox> {
    //return this.httpClient.get<Toolbox[]>(`${this.apiUrl}/toolbox`);
    return of({
      model: 'lmao',
      id: 123,
      make: 'Some make',
      serialNumber: '134234',
      color: 'green',
      dateAcquired: new Date(2000, 3, 3, 10, 42),
    } as Toolbox).pipe(tap(t => console.log(t)));
  }

  public getToolboxContents(ids: number[]): Observable<Tool[]> {
    ids.forEach(toolboxId => {
      //request
    });

    return of([
      {
        model: 'lmao',
        type: 'Spanner',
        dateAcquired: new Date(),
        color: 'Red',
        make: 'God Knows',
        serialNumber: '123489530345',
      } as Tool,
    ]);
  }
}
