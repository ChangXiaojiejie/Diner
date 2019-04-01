// 基础导入
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "@reco/core";

// 导入自定义的包
import { StockServiceModule} from "../Service/index";

import { StockModule, STOCK_ROUTE_COMPONENTS, StockNavComponent, StockContainerComponent } from "./index";

// 配置的路由

const routes: Routes = [ 
    { path: "", component: StockNavComponent, outlet: "nav" }, 
    { path: "", component: StockContainerComponent, pathMatch: "full" }
];

// 装饰器
@NgModule({
    imports: [CommonModule, CoreModule, StockModule, StockServiceModule, RouterModule.forChild(routes)],
    declarations: [STOCK_ROUTE_COMPONENTS]
})
export class AppRouteModule {}
