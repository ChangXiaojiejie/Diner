import { Component, ViewEncapsulation } from "@angular/core";

import { Core } from "@reco/core";

@Component({
    selector: "app-login-root",
    templateUrl: "./login.html",
    styleUrls: ["../Assets/Css/login.scss"],
    encapsulation: ViewEncapsulation.None
})
export class AppLoginComponent extends Core {}
