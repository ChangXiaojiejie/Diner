import { NgModule, Provider, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule, registerLocaleData } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";

import zh from "@angular/common/locales/zh";

import { CoreModule, Core, SystemState } from "@reco/core";

import { BiPlatformBrowserModule } from "@reco/platform-browser";
import { NoticeCommonModule } from "@reco/notification-common";
import { NotificationServiceModule } from "@reco/notification-service";
import { DeptServiceModule } from "@reco/dept-service";
import { UnitServiceModule } from "@reco/unit-service";

import { AppLoginComponent } from "./login";
import { AppMainComponent } from "./main";
import { AppRootComponent } from "./root";
import { AppMainHeadComponent } from "./head";

registerLocaleData(zh);

export { AppMainComponent, AppRootComponent };

export const ENTRYCOMPONENTS: Provider[] = [AppLoginComponent, AppMainComponent, AppMainHeadComponent];

export const COMPONENTS: Provider[] = [AppRootComponent, ...ENTRYCOMPONENTS];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        CoreModule,
        NoticeCommonModule,
        NotificationServiceModule,
        DeptServiceModule,
        UnitServiceModule,
        BiPlatformBrowserModule,
        RouterModule.forRoot([], { useHash: true }),
        NgZorroAntdModule
    ],
    declarations: [COMPONENTS],
    entryComponents: [ENTRYCOMPONENTS],
    bootstrap: [AppRootComponent],
    providers: [SystemState, { provide: NZ_I18N, useValue: zh_CN }]
})
export class AppModule {
    constructor(injector: Injector) {
        Core.injector = injector;
    }
}
