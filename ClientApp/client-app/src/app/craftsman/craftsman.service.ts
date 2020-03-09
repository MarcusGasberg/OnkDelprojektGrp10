import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Toolbox } from '../toolbox/toolbox';
import { tap } from 'rxjs/operators';
import { Tool } from '../models/tool';
import { Craftsman } from '../models/craftsman';

@Injectable({
  providedIn: 'root',
})
export class CraftsmanService {
  private readonly apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  public fetchAll(): Observable<Craftsman[]> {
    return of([
      {
        firstName: 'Marcus',
        lastName: 'Gasbarg',
        employmentDate: new Date(2019, 5, 10),
        workField: 'Pluming',
      } as Craftsman,
    ]);
  }

  public getCraftsman(id: number): Observable<Craftsman> {
    return of({
      firstName: 'Marcus',
      lastName: 'Gasbarg',
      employmentDate: new Date(2019, 5, 10),
      workField: 'Pluming',
    } as Craftsman);
  }
}
