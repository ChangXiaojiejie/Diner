import { Injectable } from "@angular/core";

import { CoreService } from "@reco/core";

@Injectable()
export class ContctService extends CoreService {
    constructor() {
        super("Contact/Index");
    }

    /**
     * 获得客户联系人
     * @memberof ContctService
     */
    getContactsByCustomerID(id: number | { CustomerID: number }) {
        return this.httpGet(this.resolveUrl("GetContactsByCustomerID", typeof id === "number" ? id : id && id.CustomerID));
    }

    /**
     * 获得联系人分组
     * @memberof ContctService
     */
    getContacts(data: any) {
        return this.httpGet("GetContacts", this.resolveRequestParams(data));
    }

    getContactEName(name: string) {
        return this.httpGet("GetContactEName", this.resolveRequestParams({ ContactName: name }));
    }

    /**
     * 发送消息
     */
    sendMessage(data: any) {
        if (data.IDS) (data.ID = data.IDS), (data.IDS = undefined);
        return this.httpPut("SendMessage", data);
    }

    /**
     * 设置是否有效
     */
    valid(id: number, isValid: boolean) {
        return this.httpPut(`Valid?id=${id}&isValid=${isValid}`);
    }

    /**获取导航类型 */
    getNavTypes(): any[] {
        return [{ value: 1, text: "BIProject" }, { value: 2, text: "BICustomer" }, { value: 3, text: "STDActivity" }];
    }
}
