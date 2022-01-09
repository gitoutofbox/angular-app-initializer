import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppInitService } from './services/app-init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public amount: string = '';
  constructor(
    private http: HttpClient,
    private appInit: AppInitService
  ) { }

  ngOnInit(): void {
    this.http.get(`http://localhost:8081/get-amount?currency=${this.appInit.userCurrency}`).subscribe((resp: any) => {
      this.amount = resp.amount;
    })
  }
}
