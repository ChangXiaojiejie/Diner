import { UrlSegment, UrlSegmentGroup } from '@angular/router';

declare module '@angular/router' {
    class UrlTree {

    }

    interface UrlTree {
        root: UrlSegmentGroup
        queryParams: { [key: string]: string }
        fragment: string
        toString(): string
        segments: string[]
    }
}