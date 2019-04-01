import { Component } from "@angular/core";

import { CoreNav, NavLayoutComponent } from "@reco/core";

import { DinerService } from "../Service/diner.service";

@Component({
    selector: "diner-nav",
    templateUrl: "./diner.nav.html"
})
export class DinerNavComponent extends CoreNav {
    constructor(dinerService: DinerService, layout: NavLayoutComponent) {
        super(dinerService, "diner-nav", layout);
    }
}
