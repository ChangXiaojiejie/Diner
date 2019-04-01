import { NgModule } from "@angular/core";

import { CoreModule } from "@reco/core";

import { ContctService } from "./contact.service";

export { ContctService };

@NgModule({
    imports: [CoreModule],
    providers: [ContctService]
})
export class ContctServiceModule {}
