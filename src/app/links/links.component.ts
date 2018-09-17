import { Observable, Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { LinkService } from "./link.service";
import { Link } from "./link.model";

@Component({
  selector: "hs-links",
  templateUrl: "./links.component.html",
  styleUrls: ["./links.component.scss"]
})
export class LinksComponent implements OnInit {
  links: Link[];
  subscription: Subscription;
  constructor(private service: LinkService) {
    this.getLinks();
  }
  getLinks() {
    this.subscription = this.service
      .getLinks()
      .subscribe(lnks => (this.links = lnks));
  }
  ngOnInit() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
