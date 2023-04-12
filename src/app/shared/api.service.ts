import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getShips() {
    let url = 'http://localhost:8000/ships';
    return this.http.get<any>(url);
  }
  addShip(ship: any) {
    let url = 'http://localhost:8000/ships';
    let headerObj = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let httpOption = {
      headers: headerObj
    }
    return this.http.post(url, ship, httpOption);
  }
}