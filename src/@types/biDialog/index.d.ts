declare namespace biDialog {
    interface togglesOptions {
        on?: boolean;
    }
}

interface JQuery {
    layout: any;

    showProp(direction: string): JQuery;

    hideProp(func?: () => void): JQuery;

    showSearch(): JQuery;

    hideSearch(): JQuery;

    toggleSearch(id: string): JQuery;

    toggles(options: biDialog.togglesOptions): JQuery;

    sortable(...arg: any[]): JQuery;

    disableSelection(): JQuery;

    draggable(options: any): JQuery;
}
