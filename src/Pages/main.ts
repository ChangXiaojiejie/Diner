import { Component, ChangeDetectorRef, OnDestroy } from "@angular/core";

import { Core } from "@reco/core";

import { BrowserMain } from "@reco/platform-browser";

@Component({
    selector: "app-main-root",
    templateUrl: "./main.html"
})
export class AppMainComponent extends Core implements OnDestroy {
    resize = () => {
        this.browserMain.resize();

        (this._changeDetectorRef as any).destroyed || this._changeDetectorRef.detectChanges();
    };

    constructor(public browserMain: BrowserMain, private _changeDetectorRef: ChangeDetectorRef) {
        super();

        browserMain.init(this);

        $(window).on("resize.showMore", this.resize);
    }

    ngOnDestroy(): void {
        if (this.browserMain) this.browserMain.destroy();

        $(window).off(".showMore");
    }
}
