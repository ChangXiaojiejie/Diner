import { NgModule } from "@angular/core";

import { CoreModule } from "@reco/core";

import { DinerService } from "./diner.service";

@NgModule({
    imports: [ CoreModule ],
    providers: [ DinerService ]
})
export class DinerServiceModule {}
