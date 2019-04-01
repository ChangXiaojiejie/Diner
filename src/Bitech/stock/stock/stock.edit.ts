import { Component } from "@angular/core";
import { TagService } from '@reco/tag-service';
import { CoreEdit, NavLayoutComponent } from "@reco/core";
import { ParkCatalogueService } from '@reco/park-service'
import { StockService } from "../Service/index";

@Component({
    selector: "stock-edit",
    templateUrl: "./stock.edit.html"
})
export class StockEditComponent extends CoreEdit {
    private _lastSetTimeout: any;
    parks: any[];

    contactTypeList: any[] = [];
    years: any[] = [];
    months: any[] = [];
    days: any[] = [];
    roles: any[] = [];

    constructor(
        private _contctService: StockService,
        private _catalogueService: ParkCatalogueService,
        layout: NavLayoutComponent,
        private _tagService: TagService) {

        super(_contctService, 'stock-edit', layout);
    }
    // 表单校验
    checkForm(e: any) {

        // console.log(e)
		// if (this.editInfo.ContactName && this.editInfo.ContactName.length < 2) {
		// 	e.msg.push('联系人名称 至少为两个字符');
        // }
        // if (this.editInfo.Mobile.length < 11) {
        //     e.msg.push('手机号码  至少为11位');
        // }
		// if (this.isOpenMultiParks && !(this.park && this.park.ID)) {
		// 	e.msg.push('所属园区 为必填字段');
		// }
		// if (!(this.project && this.project.ID)) {
		// 	e.msg.push('所属项目 为必填字段');
		// }
		// if (!this.editInfo.Company.IndustryCategory.TagValue) {
		// 	e.msg.push('行业类型 为必填字段');
		// }
		// if (this.editInfo.Company.RegisteredCapital && !(Number(this.editInfo.Company.RegisteredCapital) > 0)) {
		// 	e.msg.push('注册资本字段 需大于0');
		// }
		// if (this.editInfo.Company.RCToRMB && !(Number(this.editInfo.Company.RCToRMB) > 0)) {
		// 	e.msg.push('转化为人民币字段 需大于0');
		// }
	}

    /**
     * 初始化时间
     */
    initTime() {
        const now: Date = new Date();

        // 年份
        for (let i = now.getFullYear() - 100; i <= now.getFullYear(); i++) this.years.push({ Name: i, Value: i });
        // 月份
        for (let i = 1; i <= 12; i++) this.months.push({ Name: i, Value: i });
        // 日
        for (let i = 1; i <= 31; i++) this.days.push({ Name: i, Value: i });
    }

    /**
     * 获取联系人字母
     */
    updateEName() {
        if (this._lastSetTimeout) clearTimeout(this._lastSetTimeout);

        // 添加计时器 防止连续打字
        const lastSetTimeout = this._lastSetTimeout = setTimeout(() => {
            this._contctService.getContactEName(this.editInfo.ContactName).success((d: string) => {
                if (lastSetTimeout === this._lastSetTimeout) this.editInfo.ContactEName = d;
            })
        }, 600);

    }

    /**
     * 角色操作
     */
    isRoleChecked(item: any) {
        const objValue = this.roles.find((x: any) => item.TagValue === x);

        return !!objValue;
    }

    /**
     * 角色点击
     */
    roleClick(item: any) {
        (<Function>this.roles[this.isRoleChecked(item) ? 'remove' : 'push'])(item.TagValue);
    }

    /**
     * 保存前
     */
    savePre(e: any) {
        const postInfo = this.postInfo = Object.assign({}, e);

        // console.log(postInfo)

        postInfo.ContactType = this.roles.join(',');

        if (this.editInfo.Park)
            postInfo.ParkID = this.editInfo.Park.ID;
    }

}
