import { Component, OnInit } from '@angular/core';
import { SearchResultsService } from '../shared/search-results.service';
import { LocationService } from '../shared/location.service';


@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  constructor( private searchResultsService : SearchResultsService,
               private locationService: LocationService) { }

  ngOnInit() {
    this.searchResultsService.getFinder();
  }

  onSubmit() {
    debugger;
    this.searchResultsService.form.value;
    this.searchResultsService.form.reset();
    this.searchResultsService.initializeFormGroup();
  }

  onClear() {
    this.searchResultsService.form.reset();
    this.searchResultsService.initializeFormGroup();
  }

}
