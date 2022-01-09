import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  userCurrency: string = '';
  constructor(
    private http: HttpClient
  ) { }

  init() {
    return new Promise<void>((resolve, reject) => {
       this.http.get('http://localhost:8081/get').subscribe((resp:any) => {
        this.userCurrency = resp.currency;
        resolve();
       })

    });
}
}
