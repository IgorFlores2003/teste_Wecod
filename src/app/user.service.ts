import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost/index.php'; 

  constructor(private http: HttpClient) { }

  salvarDados(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados);
  }
}
