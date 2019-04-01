import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { CoreContainer, NavLayoutComponent, BICheckboxDirective, DialogComponent } from "@reco/core";

import { TagService } from "@reco/tag-service";
import { ParkCatalogueService } from "@reco/park-service";

import { ContctService } from "../Service/index";

@Component({
    selector: "contact-container",
    templateUrl: "./contact.container.html"
})
export class ContactContainerComponent extends CoreContainer implements OnInit {
    park: any;
    private _map: any = {};
    private _lastSearch: any;
    private _navTypes: any[];

    parks: any[];

    constructor(
        private _contctService: ContctService,
        layout: NavLayoutComponent,
        private _parkService: ParkCatalogueService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _tagService: TagService
    ) {
        super(_contctService, "contact-container", layout);

        this._navTypes = _contctService.getNavTypes();

        this._parkService.getAllParks({ BindTableName: "STDContact" }).success((d: any[]) => {
            d.unshift((this.park = { ParkName: "不限" }));
            this.parks = d;
        });
    }

    /**
     * 初始化配置
     */
    ngOnInit(): void {
        super.ngOnInit();

        // 检查路由
        this.subscribeProxy(this.layout.routerChange$, () => this.checkRouter());

        this.submitSearch();
        this.activeSearch();
    }

    /**
     * 检查路由
     */
    checkRouter() {
        const type = this._route.snapshot.queryParamMap.get("type");

        // 判断传值是否有效
        if (type && !this._navTypes.find(b => b.value === +type)) this._router.updateParams({ type: null });
    }

    /**
     * 初始化数据
     */
    onLoadPage(info?: any, ...args: any[]) {
        // 获取联系人类型
        this._tagService.getTagByTagClass("Contact/ContactType").success((d: any[]) => {
            d.forEach(item => (this._map[item.TagValue] = item.TagName));
        });
    }

    /**
     * 模糊查询
     */
    searchKey(input: HTMLInputElement, key: string) {
        if (this.searchParams[key] === input.value) return;

        this.searchParams[key] = input.value;

        if (this._lastSearch) clearTimeout(this._lastSearch);

        const lastSearch = (this._lastSearch = setTimeout(() => {
            if (lastSearch === this._lastSearch) this.onSearchPage();
        }, 600));
    }

    /**
     *  发送邮件 短信
     */
    send(sendRef: DialogComponent, action: string, allRef: BICheckboxDirective) {
        const ids = allRef.getCheckedIDs();

        if (ids.length === 0) {
            this.alert("请选择联系人");
            return;
        }

        this.showDialog(sendRef, { Action: action, IDS: ids });
    }

    /**
     * 获取联系人类型
     */
    getContactTypes(item: any) {
        if (!this._map || item.contactTypeStr) return item.contactTypeStr;

        item.contactTypeStr = (item.ContactType || "")
            .split(",")
            .map((item: any) => this._map[item])
            .join(",");

        return item.contactTypeStr;
    }

    /**
     * 获取查询参数
     */
    getSearchParams(params: { [key: string]: any | any[] } | null) {
        const queryParams = this._route.snapshot.queryParamMap,
            type = queryParams.get("type");

        params = super.getSearchParams(params);

        type && (params.BindTableName = (this._navTypes.find(b => b.value === +type) || {}).text);

        params.IsDefault = queryParams.get("IsDefault") || undefined;

        return params;
    }
}
