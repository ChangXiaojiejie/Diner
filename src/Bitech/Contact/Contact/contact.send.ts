import { Component } from "@angular/core";

import { CoreEdit, NavLayoutComponent } from "@reco/core";

import { ContctService } from "../Service/index";

@Component({
    selector: "contact-send",
    templateUrl: "./contact.send.html"
})
export class ContctSendEditComponent extends CoreEdit {
    constructor(private _contctService: ContctService, layout: NavLayoutComponent) {
        super(_contctService, "contact-send", layout);
    }

    /**
     * 初始化
     */
    onLoadPage(info: any, ...args: any[]) {
        this.submitFn = this._contctService.sendMessage;
    }

    saveRefresh(result: any, code: number) {
        const arg = this.createEventArgs.apply(this, arguments);

        if (code === 204 || result) {
            this.successNotice((this.editInfo.Action === "Mail" ? "邮件" : "短信") + "发送成功。");

            (this.isEdit ? this.saveUpdateRefresh : this.saveAddRefresh).call(this, result, code, arg);

            this.promises.clear();
        } else this.saveError.apply(this, arguments);
    }
}
