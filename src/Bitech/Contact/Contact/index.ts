import { NgModule, Provider } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CoreModule } from "@reco/core";

import { TagServiceModule } from "@reco/tag-service";
import { ParkServiceModule } from "@reco/park-service";

import { ContctServiceModule } from "../Service/index";

import { ContctNavComponent } from "./contact.nav";
import { ContactContainerComponent } from "./contact.container";
import { ContctEditComponent } from "./contact.edit";
import { ContctSendEditComponent } from "./contact.send";
import { ContctSliderComponent } from "./contact.slider";

export { ContctNavComponent, ContactContainerComponent, ContctEditComponent, ContctSendEditComponent, ContctSliderComponent };

export const CONTCT_ENTRYCOMPONENTS: Provider[] = [ContctEditComponent, ContctSendEditComponent, ContctSliderComponent];

export const CONTCT_COMPONENTS: Provider[] = [ContactContainerComponent, ...CONTCT_ENTRYCOMPONENTS];

export const CONTCT_ROUTE_COMPONENTS: Provider[] = [ContctNavComponent];

@NgModule({
    imports: [CommonModule, FormsModule, CoreModule, TagServiceModule, ParkServiceModule, ContctServiceModule],
    declarations: [CONTCT_COMPONENTS],
    entryComponents: [CONTCT_ENTRYCOMPONENTS]
})
export class ContctModule {}
