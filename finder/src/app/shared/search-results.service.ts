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
    search: new FormControl('2'),
    keyword: new FormControl(null),
    lotTitle: new FormControl(''),
    provenance: new FormControl(''),
    location: new FormControl(0),
    saleDateFrom: new FormControl(null),
    saleDateTo:  new FormControl(null),
    searchUpcoming:  new FormControl(false)
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
  getFinder() {
    this.searchList = this.fireBase.list('lotfinder');

  }
}
