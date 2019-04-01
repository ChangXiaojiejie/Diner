import { Component, ChangeDetectorRef } from "@angular/core";

import { CoreEdit, NavLayoutComponent } from "@reco/core";

import { DinerService } from "../Service/diner.service";

@Component({
  selector: "diner-adds",
  templateUrl: "./diner.adds.html"
})
export class DinerAddsComponent extends CoreEdit implements ChangeDetectorRef {
  genders: Array<string> =  [ 'm', 'w' ];
  dishNames: Array<string> = ["鲁菜", "川菜", "粤菜", "苏菜", "闽菜", "浙菜", "湘菜", "徽菜", "豫菜"];
  editArr: any[] = [];
  // dinerObj是初始化和添加的对象
  dinerObj: object = {Sequence: this.editArr.length + 1, DCuisine: this.dishNames[0], DGender: this.genders[0]}
  constructor(
    private _dinerService: DinerService,
    layout: NavLayoutComponent,
    private ref: ChangeDetectorRef, 
  ) {
    super(_dinerService, 'diner-edit', layout);
    // 修改提交调用的方法
    this.submitFn = this._dinerService.addDinersPost;

    // this.ref.markForCheck();
    // this.ref.detach();
    // // this.ref.detectChanges();
    // this.ref.checkNoChanges();
    // this.ref.reattach();
  }

  onLoadPage() {
    const timeSet = setTimeout(() => {
      if (this.editArr.length === 0) {
        this.editArr.push(this.dinerObj);
      }
    }, 100);
  }

  markForCheck(): void {
    this.editArr.push(this.dinerObj);
  }
  detach(): void {
    this.editArr.push(this.dinerObj);
  }
  detectChanges(): void {
    this.editArr.push(this.dinerObj);
  }
  checkNoChanges(): void {
    this.editArr.push(this.dinerObj);
  }
  reattach(): void {
    this.editArr.push(this.dinerObj);
  }


  // 重写父类保存的方法
  savePre() {
    this.postInfo = this.editArr
  }
  // 添加
  addDiners(index?: number, diner?: any) {
    this.editArr.push({Sequence: this.editArr.length + 1, DCuisine: this.dishNames[0], DGender: this.genders[0]});
  }
  // 删除
  delDiners() {
    if (this.editArr.length === 1 ) return
    this.editArr.pop()
  }

}
