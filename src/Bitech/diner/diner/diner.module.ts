import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { CoreModule } from "@reco/core";

import { DinerServiceModule} from "../Service/index";

import { DinerModule, DinerContainerComponent, DinerNavComponent } from "./index";

const routes: Routes = [
    { path: "", component: DinerNavComponent, outlet: "nav" }, 
    { path: "", component: DinerContainerComponent, pathMatch: "full" }
];

@NgModule({
    imports: [CommonModule, CoreModule, DinerModule, DinerServiceModule, RouterModule.forChild(routes)]
})
export class AppRouteModule {}
