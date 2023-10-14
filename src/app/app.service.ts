import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = `${environment.urlApi}`;

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/test`);
  }

  getDataByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/test2/${name}`);
  }
}