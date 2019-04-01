import { Component } from "@angular/core";

import { CoreView } from "@reco/core";

import { BrowserMain } from "@reco/platform-browser";
import { NotificationService } from "@reco/notification-service";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-header",
    templateUrl: "./head.html"
})
export class AppMainHeadComponent extends CoreView {
    get noticeCount() {
        return this._notificationService && this._notificationService.notice && this._notificationService.notice.TotalItems;
    }

    constructor(private _notificationService: NotificationService, public browserMain: BrowserMain) {
        super(null);
    }
}
