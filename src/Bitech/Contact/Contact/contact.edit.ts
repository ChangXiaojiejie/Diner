import { Component } from '@angular/core';

import { CoreEdit, NavLayoutComponent } from '@reco/core';

import { TagService } from '@reco/tag-service';
import { ParkCatalogueService } from '@reco/park-service'

import { ContctService } from '../Service/index';

@Component({
    selector: 'contact-edit',
    templateUrl: './contact.edit.html'
})
export class ContctEditComponent extends CoreEdit {
    private _lastSetTimeout: any;
    parks: any[];

    contactTypeList: any[] = [];
    years: any[] = [];
    months: any[] = [];
    days: any[] = [];
    roles: any[] = [];

    constructor(
        private _contctService: ContctService,
        private _catalogueService: ParkCatalogueService,
        layout: NavLayoutComponent,
        private _tagService: TagService) {

        super(_contctService, 'contact-edit', layout);
    }

    async onLoadPage(info: any, ...args: any[]) {
        if (info && info.ID) this.bind(await this._contctService.get(info.ID).json());

        // 获取联系人类型
        this._tagService.getTagByTagClass('Contact/ContactType').success((d: any[]) => this.contactTypeList = d)

        await this._catalogueService.getAllParks({ BindTableName: 'STDContact' }).success(d => this.parks = d)

        // 设置role
        if (this.editInfo.ID && info.ContactType)
            this.editInfo.ContactType.split(',').forEach((data: string) => this.roles.push(data));

        if (this.editInfo.ParkID) this.editInfo.Park = this.parks.find(p => p.ID === this.editInfo.ParkID);

        // 初始化时间
        this.initTime();
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

        postInfo.ContactType = this.roles.join(',');

        if (this.editInfo.Park)
            postInfo.ParkID = this.editInfo.Park.ID;
    }
}
