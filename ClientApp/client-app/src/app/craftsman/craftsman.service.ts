import { Injectable } from '@angular/core';
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
  constructor(private httpClient: HttpClient) { }

  public fetchAll(): Observable<Craftsman[]> {
    return this.httpClient.get<Craftsman[]>(`api/craftsmen`);
  }

  public getCraftsman(id: number): Observable<Craftsman> {
    return this.httpClient.get<Craftsman>(`api/craftsmen/${id}`);
  }
}
