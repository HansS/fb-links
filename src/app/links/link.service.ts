import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Link } from "./state/link.model";
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class LinkService {
  private linksCollection: AngularFirestoreCollection<Link>;
  constructor(private afs: AngularFirestore) {}
  addLink(link: Link) {
    this.linksCollection.add(link);
  }
  getLinks(): Observable<Link[]> {
    this.linksCollection = this.afs.collection<Link>("links");
    return this.linksCollection.valueChanges();
  }
}
