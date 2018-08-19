import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-query-page',
  templateUrl: './query-page.component.html',
  styleUrls: ['./query-page.component.css']
})
export class QueryPageComponent implements OnInit {
  baseUrl = '/api/';
  currentRunways;
  searchTypes = [{value:'byCode', title:'CODE'}, {value:'byName', title:'NAME'}];
  currentSearchType;
  result;
  searchValue;
  runways;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {}

  sendQuery() {
    this.currentRunways = null;
    this.httpClient.get(this.baseUrl + 'airport/query/' + this.currentSearchType + '/' + this.searchValue  + '?size=10&page=0').subscribe(
      data => {
        this.result = data['content'];
        console.log('this.result', this.result);
      }
      , error => {
        console.log(error);
      }
    );
  }

  showRunways(item) {
    if(item.runways)
      if(item.runways[0])
        this.currentRunways = item.runways;
  }
}
