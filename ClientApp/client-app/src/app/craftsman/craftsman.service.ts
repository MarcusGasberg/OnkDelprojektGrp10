import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Toolbox } from '../models/toolbox';
import { tap } from 'rxjs/operators';
import { Tool } from '../models/tool';
import { Craftsman } from '../models/craftsman';
import { ThrowStmt } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CraftsmanService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Craftsman[]> {
    return this.httpClient.get<Craftsman[]>(`${this.apiUrl}/craftsmen`);
  }

  public getCraftsman(id: number): Observable<Craftsman> {
    return this.httpClient.get<Craftsman>(`${this.apiUrl}/craftsmen/${id}`);
  }

  public postCrafsman(craftsman: Craftsman): Observable<Craftsman> {
    return this.httpClient.post<Craftsman>(
      `${this.apiUrl}/craftsmen`,
      craftsman
    );
  }

  public putCraftsman(craftsman: Craftsman): Observable<any> {
    return this.httpClient.put(
      `${this.apiUrl}/craftsmen/${craftsman.id}`,
      craftsman
    );
  }

  public deleteCraftsman(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/craftsmen/${id}`);
  }
}
