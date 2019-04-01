import { Component } from "@angular/core";

import { CoreNav, NavLayoutComponent } from "@reco/core";

import { StockService } from "../Service/index";

@Component({
    selector: "stock-nav",
    templateUrl: "./stock.nav.html"
})
export class StockNavComponent extends CoreNav {
    constructor(stockService: StockService, layout: NavLayoutComponent) {
        super(stockService, "stock-nav", layout);
    }
}
