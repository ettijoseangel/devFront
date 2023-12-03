import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(NUE: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      NUE: NUE,
      password: password
    };

    return this.http.post('http://localhost:8000/api/login', body, { headers: headers });
  }
}
