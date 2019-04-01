import { Injectable } from "@angular/core";

import { CoreService } from "@reco/core";

@Injectable()
export class DinerService extends CoreService {
    constructor() {
        // 传入的 当前的组件在服务端的标识
        super("Diner/Index");
    }
    /**
     * 获得联系人分组
     * @memberof DinerService
     */
    getDiners(data: any) {
        return this.httpGet("GetDiners", this.resolveRequestParams(data));
    }
    /**
     * 多条数据保存
     * @param diners 
     */
    addDinersPost(diners: any) {
        return this.httpPost("AddDiners", diners)
    }
}
