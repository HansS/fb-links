import { Component, OnInit, Input } from "@angular/core";
import { Link } from "../../state/link.model";

@Component({
  selector: "link-listitem",
  templateUrl: "./link-listitem.component.html",
  styleUrls: ["./link-listitem.component.scss"]
})
export class LinkListitemComponent implements OnInit {
  @Input()
  link: Link;
  constructor() {}

  ngOnInit() {}
}
