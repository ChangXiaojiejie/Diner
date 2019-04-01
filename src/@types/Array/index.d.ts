
interface SmartTree {
    id: number,
    pid: number,
    text: string,
    layer?: number;
    value?: any;
    path?: string;
    isexpand?: boolean;
    hasChildren?: boolean;
    checkState?: number;
    showcheck?: boolean;
    singlecheck?: boolean;
    parent?: SmartTree,
    children?: SmartTree[]
}

interface Array<T> {
    remove(v: T, deleteCount?: number): number | void

    removeGrep<TResult = never>(fn: (v: T, index: number, array: this) => TResult, inv?: TResult): T | void

    removeGrepAll<TResult = never>(fn: (v: T, index: number, array: this) => TResult, inv?: TResult): T[]

    groupBy(field: string): { key: string, value: T[] }[]

    toTree(showcklayer?: number): this

    toTreeNode(showcklayer?: number): { line: SmartTree[], tree: SmartTree[] }

    treeSort(tmpl: string, rootLayer?: number, useVirtualRoot?: boolean, prefixStr?: string, prefixChildStr?: string, prefixRTL?: boolean): T[]

    treeChild(parentNode?: T): T[]

    add(...items: T[]): number

    clear(): void

    first(): T

    last(): T

    contains(item: T): boolean;
}
