// 基础导入
import { NgModule, Provider } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "@reco/core";
import { TagServiceModule } from "@reco/tag-service";
import { ParkServiceModule } from "@reco/park-service";

// 导入自定义的包
import { StockServiceModule } from "../Service/index";
import { StockNavComponent } from "./stock.nav";
import { StockContainerComponent } from "./stock.container";
import { StockEditComponent } from "./stock.edit";
import { StockSendEditComponent } from "./stock.send";
import { StockSliderComponent } from "./stock.slider";


export {StockNavComponent, StockEditComponent, StockContainerComponent, StockSendEditComponent, StockSliderComponent };

// StockEditComponent：修改页面； StockSendEditComponent：发送修改的信息； StockSliderComponent：个人详细信息
export const STOCK_ENTRYCOMPONENTS: Provider[] = [StockEditComponent, StockSendEditComponent, StockSliderComponent];

export const STOCK_COMPONENTS: Provider[] = [StockContainerComponent, ...STOCK_ENTRYCOMPONENTS];

export const STOCK_ROUTE_COMPONENTS: Provider[] = [StockNavComponent];

@NgModule({
    imports: [CommonModule, FormsModule, CoreModule, TagServiceModule, ParkServiceModule, StockServiceModule],
    declarations: [STOCK_COMPONENTS],
    entryComponents: [STOCK_ENTRYCOMPONENTS]
})
export class StockModule {}
