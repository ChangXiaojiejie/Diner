
interface IPoint {
    x: number;
    y: number;
}

interface IRGBA {
    r: number
    g: number
    b: number
    a?: number
}

interface IPolygonCtx {
    /**
     * 热区ID
     */
    id?: number,
    /**
     * 数据
     */
    data?: Hotspot.ProcessItemResults;
    /**
     * 名称
     */
    name: string;
    /**
     * 编号
     */
    index?: number;
    /** 
     * 创建方法名
    */
    methodName?: string;
    /**
     *  RGBA值
     */
    rgba?: IRGBA;
    /**
     * 缩放比例
     */
    scale: number;
    /**
     * 
     */
    title?: ITitlePolygon;
}

interface IPolygon extends IPolygonCtx {
    /**
     * 边界点
     */
    points: IPoint[];
}

interface IRound extends IPolygonCtx {
    /**
     * 圆心
     */
    center: IPoint;
    /**
     * 半径
     */
    r: number;
}

interface IRectRange {
    /**
     * 起点x
     */
    x?: number;
    /**
     * 起点y
     */
    y?: number;
    /**
     * 终点x
     */
    endx?: number,
    /**
     * 终点y
     */
    endy?: number,
}

interface ITitlePolygon {
    /**
    * 边界点
    */
    points?: IPoint[];
    /**
     * 标题内容
     */
    title: string
    /**
     * 绘制中心点
     */
    center: IPoint;
    /**
     * 最大宽度
     */
    maxWidth?: number;
}


declare namespace Hotspot {
    interface ProcessItemResults {
        id: number | string;
        name: string;
        source: any;
    }
}
