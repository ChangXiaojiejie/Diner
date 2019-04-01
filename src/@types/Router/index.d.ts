import { Routes, UrlTree, NavigationExtras, RouteReuseStrategy, UrlHandlingStrategy, RouterState, Params } from '@angular/router';
import { Observable } from 'rxjs';

declare module '@angular/router' {
    class Router {

    }

    interface Router {
        config: Routes;

        errorHandler: (error: any) => any;

        navigated: boolean;

        urlHandlingStrategy: UrlHandlingStrategy;
        routeReuseStrategy: RouteReuseStrategy;

        initialNavigation(): void;

        setUpLocationChangeListener(): void;

        readonly routerState: RouterState;

        readonly url: string;

        readonly events: Observable<Event>;

        resetConfig(config: Routes): void;

        ngOnDestroy(): void;

        dispose(): void;

        createUrlTree(commands: any[], navigationExtras?: NavigationExtras): UrlTree;

        navigateByUrl(url: string | UrlTree, extras?: NavigationExtras): Promise<boolean>;

        navigate(commands: any[], extras?: NavigationExtras): Promise<boolean>;

        serializeUrl(url: UrlTree): string;

        parseUrl(url: string): UrlTree;

        isActive(url: string | UrlTree, exact: boolean): boolean;

        updateParams(queryParams?: Params): Promise<boolean>;
    }
}