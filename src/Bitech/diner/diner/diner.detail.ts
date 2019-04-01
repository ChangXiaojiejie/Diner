import { OnInit, Component } from "@angular/core";

import { CoreView, NavLayoutComponent } from "@reco/core";

import { DinerService } from "../Service/diner.service";

@Component({
  selector: "diner-detail",
  templateUrl: "./diner.detail.html"
})
export class DinerDetailComponent extends CoreView implements OnInit {
  constructor(
    dinerService: DinerService,
    layout: NavLayoutComponent,
  ) {
    super(dinerService, "diner-detail", layout);
  }
  ngOnInit(): void {
    super.ngOnInit()
    this.submitSearch(d => {
      this.info = d.data.PostInfo
    })
  }
}
