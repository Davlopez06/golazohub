import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // 🔹 GET: Obtener datos
  getPosts(apiUrl: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth-Token': environment.apiKey,
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache',
      'Accept-Encoding': 'gzip, deflate, br',
    });

    return this.http.get(apiUrl, { headers });
  }
}
