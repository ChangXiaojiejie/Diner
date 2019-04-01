import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CoreContainer, NavLayoutComponent } from "@reco/core";

import { DinerService } from "../Service/diner.service";

@Component({
  selector: "diner-container",
  templateUrl: "./diner.container.html"
})
export class DinerContainerComponent extends CoreContainer implements OnInit {
  navTypes: any[];
  lastSearch: any;
  constructor(
    dinerService: DinerService,
    layout: NavLayoutComponent,
    private _route: ActivatedRoute,
  ) {
    super(dinerService, "diner-container", layout);
  }
  // 初始化配置
  ngOnInit(): void {
    this.subscribeProxy(this.layout.routerChange$, () => this.checkRouter());
    super.ngOnInit();
    this.submitSearch();
    this.activeSearch(() => this.checkRouter());    
  }
  // 检查路由
  checkRouter() {
    this.searchParams = {}
  }
  // 模糊查询
  searchKey(input: HTMLInputElement, key: string) {
    // if (this.searchParams[key] === input.value) return;
    this.searchParams[key] = input.value;
    if (this.lastSearch) clearTimeout(this.lastSearch);
    const lastSearch = (this.lastSearch = setTimeout(() => {
      if (lastSearch === this.lastSearch) this.onSearchPage();
    }, 600));
  }
  // 获取查询参数
  getSearchParams(params: { [key: string]: any | any[] } | null) {
    const queryParams = this._route.snapshot.queryParamMap,
    type = queryParams.get("type");
    params = super.getSearchParams(params);
    type && (params.BindTableName = (this.navTypes.find(b => b.value === +type) || {}).text);
    params.DGender =  queryParams.get("DGender") || undefined;
    return params;
  }
}
