import { NgModule, Provider } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CoreModule } from "@reco/core";
import { TagServiceModule } from "@reco/tag-service";
import { ParkServiceModule } from "@reco/park-service";

import { DinerContainerComponent } from "./diner.container";
import { DinerNavComponent } from "./diner.nav"
import { DinerServiceModule } from "../Service";
import { DinerEditComponent } from "./diner.edit";
import { DinerDetailComponent } from "./diner.detail";
import { DinerGenderPipe } from "./diner.gender";
import { DinerBirthComponent } from "./diner.birth";
import { DinerHiddenDirective } from "./diner.hidden";
import { DinerHandDirective } from "./diner.handEventive";
import { DinerAddsComponent } from "./diner.adds";

export { 
    DinerContainerComponent, DinerNavComponent, DinerEditComponent, DinerDetailComponent, DinerBirthComponent, 
    DinerHiddenDirective, DinerHandDirective, DinerAddsComponent 
};

// 导出 路由连接组件
const DINER_ROUTER_COMPONENTS: Provider[] = [ DinerNavComponent ];

// 导出当前的连接组件 注册的组件必须在这里声明
const DINER_COMPONENTS: Provider[] = [ 
    DinerContainerComponent, DinerEditComponent, DinerDetailComponent, DinerGenderPipe, DinerBirthComponent, 
    DinerHiddenDirective, DinerHandDirective, DinerAddsComponent
];

// 导出组件弹窗/修改/详细/完善信息组件
const DINER_ENTRYCOMPONENTS: Provider[] = [ DinerEditComponent, DinerDetailComponent, DinerBirthComponent, DinerAddsComponent ];

@NgModule({
    // 这里列出的 NgModule 所导出的可声明对象可用在当前模块内的模板中
    imports: [CommonModule, FormsModule, CoreModule, TagServiceModule, ParkServiceModule, DinerServiceModule],
    declarations: [DINER_COMPONENTS, DINER_ROUTER_COMPONENTS],
    entryComponents: [DINER_ENTRYCOMPONENTS],
    exports: [DINER_ROUTER_COMPONENTS]
})
export class DinerModule {}
