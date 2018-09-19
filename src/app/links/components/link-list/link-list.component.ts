import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Link } from "../../state/link.model";

@Component({
  selector: "link-list",
  templateUrl: "./link-list.component.html",
  styleUrls: ["./link-list.component.scss"]
})
export class LinkListComponent implements OnInit {
  @Input()
  links: Link[];
  constructor() {}

  ngOnInit() {}
}
