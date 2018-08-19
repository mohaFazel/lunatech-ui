import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {
  urls = {
    highest:  '/api/country/report/countryWithHighestNumberOfAirports',
    lowest:  '/api/country/report/countryWithLowestNumberOfAirports',
    types:  '/api/runway/report/runwayTypesByCountry',
    ident:  '/api/runway/report/runwayIdentCounts',
  };
  highest;
  lowest;
  types;
  ident;
  reports;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get(this.urls['highest']).subscribe(
      data => {
        this.highest = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  getData(name) {
    this.httpClient.get(this.urls[name]).subscribe(
      data => {
        switch(name) {
          case 'highest': {
            this.highest = data;
            this.lowest = this.types = this.ident = null;
            break;
          }
          case 'lowest': {
            this.lowest = data;
            this.highest = this.types = this.ident = null;
            break;
          }
          case 'types': {
            this.types = data;
            this.lowest = this.highest = this.ident = null;
            break;
          }
          case 'ident': {
            this.ident = data;
            this.lowest = this.types = this.highest = null;
            break;
          }
        }
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

}
