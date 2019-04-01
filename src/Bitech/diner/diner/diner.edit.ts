import { Component, OnInit } from "@angular/core";

import { CoreEdit, NavLayoutComponent } from "@reco/core";

import { DinerService } from "../Service/diner.service";

@Component({
  selector: 'diner-edit',
  templateUrl: "./diner.edit.html"
})
export class DinerEditComponent extends CoreEdit {
  genders: Array<string> =  [ 'm', 'w' ];
  dishNames: Array<string> = ["鲁菜", "川菜", "粤菜", "苏菜", "闽菜", "浙菜", "湘菜", "徽菜", "豫菜"];
  constructor(
    private _dinerService: DinerService,
    layout: NavLayoutComponent,
  ) {
    super(_dinerService, 'diner-edit', layout)
  }
  // 定义默认下拉框选中
  onLoadPage() {
    this.editInfo.DCuisine = this.dishNames[0]
    this.editInfo.DGender = this.genders[0]
  }
}
