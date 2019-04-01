import { Component} from "@angular/core";

import { CoreEdit, NavLayoutComponent } from "@reco/core";

import { DinerService } from "../Service/diner.service";

@Component({
  selector: "diner-birth",
  templateUrl: "./diner.birth.html"
})
export class DinerBirthComponent extends CoreEdit {
  genders: Array<string> =  [ 'm', 'w', undefined ];
  dishNames: Array<string> = ["鲁菜", "川菜", "粤菜", "苏菜", "闽菜", "浙菜", "湘菜", "徽菜", "豫菜"];
  constructor(
    dinerService: DinerService,
    layout: NavLayoutComponent
  ) {
    super(dinerService, 'diner-birth', layout);
  }
  getDinerEl(str: string) {
    console.log(str)
  }
}
