// 导入 基础包
import { Injectable } from "@angular/core";
import { CoreService } from "@reco/core";

// 打开引入包
@Injectable()
export class StockService extends CoreService {
    constructor() {
        // 传入的 当前的组件在服务端的标识
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
        // console.log(this.httpGet("GetContacts", this.resolveRequestParams(data)))
        return this.httpGet("GetContacts", this.resolveRequestParams(data));
    }
    /**
     * 获取联系人
     * @param name 
     */
    getContactEName(name: string) {
        return this.httpGet("GetContactEName", this.resolveRequestParams({ ContactName: name }));
    }

    /**
     * 设置是否有效
     */
    valid(id: number, isValid: boolean) {
        return this.httpPut(`Valid?id=${id}&isValid=${isValid}`);
    }

    /**
     * 获取导航类型
     */
    getNavTypes(): any[] {
        return [{ value: 1, text: "BIProject" }, { value: 2, text: "BICustomer" }, { value: 3, text: "STDActivity" }];
    }
}
