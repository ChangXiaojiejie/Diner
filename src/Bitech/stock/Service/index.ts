// 导入基础包
import { NgModule } from "@angular/core";
import { CoreModule } from "@reco/core";

// 导入自定义的包
import { StockService } from "./stock.service";

// 导出 StockService
export { StockService };

// 修饰器
@NgModule({
    imports: [CoreModule],
    providers: [StockService]
})
// 导出StockServiceModule
export class StockServiceModule {}
