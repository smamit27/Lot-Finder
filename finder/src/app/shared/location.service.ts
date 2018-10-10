import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locationList: AngularFireList<any>;
  array = [];
  constructor(private fireBase: AngularFireDatabase) { 
    this.locationList = this.fireBase.list('locationList');
    this.locationList.snapshotChanges().subscribe(
      list =>{
        this.array = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
    });
  }
}
