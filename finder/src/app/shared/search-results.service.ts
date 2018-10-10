import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {
  searchList: AngularFireList<any>;
  constructor(private fireBase: AngularFireDatabase,
    private datePipe: DatePipe) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    search: new FormControl('1'),
    keyword: new FormControl(null),
    lotTitle: new FormControl(''),
    provenance: new FormControl(''),
    location: new FormControl(0),
    saleDateFrom: new FormControl(null),
    saleDateTo:  new FormControl(null),
    searchUpcoming:  new FormControl(false)
  });
  formAuction: FormGroup = new FormGroup({
    saleNumber: new FormControl(null),
    lotNumber: new FormControl(null),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      search: '1',
      keyword: '',
      lotTitle: '',
      provenance: '',
      saleDateFrom: '',
      saleDateFromTo: '',
      location: 0,
      searchUpcoming: false
    });
  }
  initializeFormAuctionGroup() {
    this.form.setValue({
      $key: null,
      saleNumber: '',
      lotNumber: ''
    });

  }
  getFinder() {
    this.searchList = this.fireBase.list('lotfinder');
    return this.searchList.snapshotChanges();


  }
  searchFinder(finder) {

    this.searchList.push({
      search: finder.search,
      keyword: finder.keyword,
      lotTitle: finder.lotTitle,
      provenance: finder.provenance,
      saleDateFrom: this.datePipe.transform(finder.saleDateFrom, 'yyyy-MM-dd'),
      saleDateFromTo:  this.datePipe.transform(finder.saleDateFromTo, 'yyyy-MM-dd') ,
      location: finder.location,
      searchUpcoming: finder.searchUpcoming
    });
  }
}
