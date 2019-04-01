import { PartialObserver } from "rxjs";
import { Subscription } from "rxjs";
import { Observable } from "rxjs";

declare module "rxjs/internal/Observable" {
    interface Observable<T> {
        oneSubscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription;
    }
}
