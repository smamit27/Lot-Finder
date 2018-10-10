import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from '../shared/search-results.service';

@Component({
  selector: 'app-auction-search',
  templateUrl: './auction-search.component.html',
  styleUrls: ['./auction-search.component.css']
})
export class AuctionSearchComponent implements OnInit {

  constructor(private searchResultsService: SearchResultsService) { }

  ngOnInit() {
  }
  onAuction() {
    this.searchResultsService.formAuction.value;
    this.searchResultsService.formAuction.reset();
    this.searchResultsService.initializeFormAuctionGroup();
  }

}
