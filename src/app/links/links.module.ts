import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LinksRoutingModule } from "./links-routing.module";
import { LinksComponent } from "./links.component";
import { LinkListComponent } from "./components/link-list/link-list.component";
import { LinkAddComponent } from "./components/link-add/link-add.component";
import { LinkEditComponent } from "./components/link-edit/link-edit.component";
import { LinkDetailsComponent } from "./components/link-details/link-details.component";
import { LinkService } from "./link.service";
import { LinkListitemComponent } from "./components/link-listitem/link-listitem.component";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { LinkEffects } from "./entities/link.effects";
import * as fromLinks from "./entities/links.reducer";
import * as fromLink from "./state/link.reducer";

// import { LinkEffects } from "./state/link.effects";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LinksRoutingModule,
    StoreModule.forFeature("link", fromLink.reducer),
    EffectsModule.forFeature([LinkEffects]),
    StoreModule.forFeature("links", fromLinks.reducer)
  ],
  declarations: [
    LinksComponent,
    LinkListComponent,
    LinkAddComponent,
    LinkEditComponent,
    LinkDetailsComponent,
    LinkListitemComponent
  ]
})
export class LinksModule {}
