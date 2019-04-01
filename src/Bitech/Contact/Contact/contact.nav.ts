import { Component } from "@angular/core";

import { CoreNav, NavLayoutComponent } from "@reco/core";

import { ContctService } from "../Service/index";

@Component({
    selector: "contact-nav",
    templateUrl: "./contact.nav.html"
})
export class ContctNavComponent extends CoreNav {
    constructor(contctService: ContctService, layout: NavLayoutComponent) {
        super(contctService, "contact-nav", layout);
    }
}
