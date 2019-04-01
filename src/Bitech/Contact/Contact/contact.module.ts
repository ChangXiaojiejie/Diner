import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { CoreModule } from "@reco/core";

import { ContctServiceModule } from "../Service/index";

import { ContctModule, CONTCT_ROUTE_COMPONENTS, ContctNavComponent, ContactContainerComponent } from "./index";

const routes: Routes = [{ path: "", component: ContctNavComponent, outlet: "nav" }, { path: "", component: ContactContainerComponent, pathMatch: "full" }];

@NgModule({
    imports: [CommonModule, CoreModule, ContctModule, ContctServiceModule, RouterModule.forChild(routes)],
    declarations: [CONTCT_ROUTE_COMPONENTS]
})
export class AppRouteModule {}
