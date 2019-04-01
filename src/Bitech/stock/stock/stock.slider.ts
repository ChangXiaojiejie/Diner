import { Component, OnInit } from "@angular/core";

import { CoreView, NavLayoutComponent, SliderDialogComponent } from "@reco/core";

import { TagService } from "@reco/tag-service";
import { ParkService, ParkResourceService, ParkCatalogueService } from "@reco/park-service";

import { StockService } from "../Service/index";

@Component({
    selector: "stock-slider",
    templateUrl: "./stock.slider.html"
})
export class StockSliderComponent extends CoreView implements OnInit {
    private _map: any;
    parkRes: string;

    constructor(
        private _contctService: StockService,
        private _parkService: ParkService,
        private _resService: ParkResourceService,
        private _catalogueService: ParkCatalogueService,
        layout: NavLayoutComponent,
        private _tagService: TagService,
        private _slider: SliderDialogComponent
    ) {
        super(_contctService, "stock-slider", layout);
    }

    /**
     * 获取联系人类型
     */
    async onLoadPage(info: any, ...args: any[]) {
        if (info && info.ID) this.bind(await this._contctService.get(info.ID).json());

        this._parkService.getAll().success((d: any[]) => (this.parkRes = d.find(p => p.ID === this.info.ParkID).ParkName));

        // 获取联系人类型
        this._tagService.getTagByTagClass("Contact/ContactType").success((d: any[]) => {
            (this._map = {}), d.forEach(item => (this._map[item.TagValue] = item.TagName));
        });
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
     * 删除事件
     */
    delete(id: number) {
        this.confirmAction("删除该联系人", this._contctService.delete, id).success(() => {
            this.search();

            this._slider.dialogContext.close();
        });
    }
}
