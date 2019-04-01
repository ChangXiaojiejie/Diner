import { RequestOptionsArgs, Headers, URLSearchParams } from "@angular/http";

declare module "@angular/http" {
    export interface RequestOptionsArgs {
        url?: string | null;
        params?:
            | string
            | URLSearchParams
            | {
                  [key: string]: any | any[];
              }
            | null;
        headers?: Headers | null;
        body?: any;
        unit?: boolean;
        park?: boolean;
    }
}
