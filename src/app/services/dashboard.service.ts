import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getActivities(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.baseUrl}/activity`).subscribe(data => resolve(data), error => reject(error));
    });
  }
}
