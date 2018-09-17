import { LinksComponent } from "./links.component";
import { LinkAddComponent } from "./components/link-add/link-add.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LinkListComponent } from "./components/link-list/link-list.component";

const routes: Routes = [
  {
    path: "links",
    component: LinksComponent,
    children: [
      { path: "list", component: LinkListComponent },
      { path: "add", component: LinkAddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksRoutingModule {}
