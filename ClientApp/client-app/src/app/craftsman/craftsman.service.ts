import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Toolbox } from '../models/toolbox';
import { tap } from 'rxjs/operators';
import { Tool } from '../models/tool';
import { Craftsman } from '../models/craftsman';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class CraftsmanService {
  constructor(private httpClient: HttpClient) {}

  public fetchAll(): Observable<Craftsman[]> {
    return this.httpClient.get<Craftsman[]>(`api/craftsmen`);
  }

  public getCraftsman(id: number): Observable<Craftsman> {
    return this.httpClient.get<Craftsman>(`api/craftsmen/${id}`);
  }

  public postCrafsman(craftsman: Craftsman): Observable<Craftsman> {
    return this.httpClient.post<Craftsman>(`api/craftsmen`, craftsman);
  }

  public putCraftsman(craftsman: Craftsman): Observable<any> {
    return this.httpClient.put(`api/craftsmen/${craftsman.id}`, craftsman);
  }

  public deleteCraftsman(id: number): Observable<any> {
    return this.httpClient.delete(`api/craftsmen/${id}`);
  }
}
