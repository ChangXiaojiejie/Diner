import { Component, Type } from "@angular/core";

import { Core } from "@reco/core";
import { BrowserBootstrap, IAppBootstrap } from "@reco/platform-common";

import { environment } from "../environments/environment";

import { AppLoginComponent } from "./login";
import { AppMainComponent } from "./main";

@Component({
    selector: "app-root",
    template: `
        <ng-container *ngComponentOutlet="completeComponent"></ng-container>
    `
})
export class AppRootComponent extends Core implements IAppBootstrap {
    completeComponent: Type<any>;

    constructor(browserBootstrap: BrowserBootstrap) {
        super();

        browserBootstrap.init(this, environment);
    }

    viewSwitching(hasLogged: boolean, component?: Type<any>) {
        this.completeComponent = component || (hasLogged ? AppMainComponent : AppLoginComponent);
    }
}
