import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireStoreService {
  bundleCollection = collection(this.firestore, 'bundles');

  constructor(private firestore: Firestore) {}

  getData() {
    return collectionData(this.bundleCollection, { idField: 'id' });
  }
}
