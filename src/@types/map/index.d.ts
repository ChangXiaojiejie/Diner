
declare namespace AMap {
    class Map {
        constructor(...args: any[])
    }
    class ToolBar {
        constructor(...args: any[])
    }
    class Scale {
        constructor(...args: any[])
    }
    class OverView {
        constructor(...args: any[])
    }
    class Autocomplete {
        constructor(...args: any[])
    }
    class PlaceSearch {
        constructor(...args: any[])

        setCity(...args: any[])
        search(...args: any[])
    }

    class Polygon {
        constructor(...args: any[])
        setMap(...args: any[])
    }
    class Text {
        constructor(...args: any[])
        setMap(...args: any[])
    }
    class Marker {
        constructor(...args: any[])
        setMap(...args: any[])
    }
    class GeoJSON {
        constructor(...args: any[])
        setMap(...args: any[])
    }

    class LngLat {
        constructor(...args: any[])
    }

    class MouseTool {
        constructor(...args: any[])
    }

    class Geolocation {
        constructor(...args: any[])
    }

    class Pixel {
        constructor(...args: any[])
    }

    class Geocoder {
        constructor(...args: any[])
    }

    function plugin(tools: any, func: () => void)

    const event: any
}

interface MapOptions {
    /**
     * 地图视口，用于控制影响地图静态显示的属性，如：地图中心点“center”
     * 推荐直接使用zoom、center属性为地图指定级别和中心点
     */
    view?: String,
    /**
     * 地图图层数组，数组可以是图层 中的一个或多个，默认为普通二维地图。
     * 当叠加多个图层时，普通二维地图需通过实例化一个TileLayer类实现
     */
    layers?: any[],
    /**
     * 地图显示的缩放级别，若center与level未赋值，地图初始化默认显示用户所在城市范围3D地图下，zoom值，可以设置为浮点数。
     * （在V1.3.0版本level参数调整为zoom，3D地图修改自V1.4.0开始生效）
     */
    zoom?: Number,
    /**
     * 地图中心点坐标值
     */
    center?: any,
    /**
     * 地图标注显示顺序，大于110即可将底图上的默认标注显示在覆盖物（圆、折线、面）之上
     */
    labelzIndex?: Number,
    /**
     * 地图显示的缩放级别范围
     * 在PC上，默认为[3,18]，取值范围[3-18]；
     * 在移动设备上，默认为[3,19],取值范围[3-19]
     */
    zooms?: Number[],
    /**
     * 地图语言类型
     * 可选值：zh_cn：中文简体，en：英文，zh_en：中英文对照
     * 默认为: zh_cn：中文简体
     * 注：由于图面内容限制，中文、英文 、中英文地图POI可能存在不一致的情况
     */
    lang?: String,
    /**
     * 地图默认鼠标样式。参数defaultCursor应符合CSS的cursor属性规范
     */
    defaultCursor?: String,
    /**
     * 地图显示的参考坐标系，取值：
     * 'EPSG3857'
     * 'EPSG3395'
     * 'EPSG4326'
     * 自V1.3.0移入view对象中
     */
    crs?: String,
    /**
     * 地图平移过程中是否使用动画（如调用panBy、panTo、setCenter、setZoomAndCenter等函数，将对地图产生平移操作，是否使用动画平移的效果），默认为true，即使用动画
     */
    animateEnable?: Boolean,
    /**
     * 是否开启地图热点和标注的hover效果。PC端默认是true，移动端默认是false 
     */
    isHotspot?: Boolean,
    /**
     * 当前地图中默认显示的图层。默认图层可以是TileLayer.Satellite等切片地图，也可以是通过TileLayer自定义的切片图层
     */
    defaultLayer?: any,
    /**
     * 地图是否可旋转，3D视图默认为true，2D视图默认false。（V1.3版本新增，3D视图自V1.4.0开始支持）
     * 自v1.4.8开始，当此属性为false时，地图以初始属性设置的rotation值为旋转角度，同时setRotation和鼠标手势交互操作将不能改变旋转角度
     */
    rotateEnable?: Boolean,
    /**
     * 是否监控地图容器尺寸变化，默认值为false
     */
    resizeEnable?: Boolean,
    /**
     * 是否在有矢量底图的时候自动展示室内地图，PC端默认是true，移动端默认是false
     */
    showIndoorMap?: Boolean,
    /**
     * 在展示矢量图的时候自动展示室内地图图层，当地图complete之后可以获取到该对象
     */
    indoorMap?: any,
    /**
     * 是否支持可以扩展最大缩放级别,和zooms属性配合使用
     * 设置为true的时候，zooms的最大级别在PC上可以扩大到20级，移动端还是高清19/非高清20
     */
    expandZoomRange?: Boolean,
    /**
     * 地图是否可通过鼠标拖拽平移，默认为true。此属性可被setStatus/getStatus 方法控制
     */
    dragEnable?: Boolean,
    /**
     * 地图是否可缩放，默认值为true。此属性可被setStatus/getStatus 方法控制
     */
    zoomEnable?: Boolean,
    /**
     * 地图是否可通过双击鼠标放大地图，默认为true。此属性可被setStatus/getStatus 方法控制
     */
    doubleClickZoom?: Boolean,
    /**
     * 地图是否可通过键盘控制,默认为true
     * 方向键控制地图平移，"+"和"-"可以控制地图的缩放，
     * Ctrl+“→”顺时针旋转，Ctrl+“←”逆时针旋转。
     * 此属性可被setStatus/getStatus 方法控制
     */
    keyboardEnable?: Boolean,
    /**
     * 地图是否使用缓动效果，默认值为true。此属性可被setStatus/getStatus 方法控制
     */
    jogEnable?: Boolean,
    /**
     * 地图是否可通过鼠标滚轮缩放浏览，默认为true。此属性可被setStatus/getStatus 方法控制
     */
    scrollWheel?: Boolean,
    /**
     * 地图在移动终端上是否可通过多点触控缩放浏览地图，默认为true。关闭手势缩放地图，请设置为false。
     */
    touchZoom?: Boolean,
    /**
     * 可缺省，当touchZoomCenter=1的时候，手机端双指缩放的以地图中心为中心，否则默认以双指中间点为中心
     */
    touchZoomCenter?: Number,
    /**
     * 设置地图的显示样式，目前支持两种地图样式：
     * 第一种：自定义地图样式，如"amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86"
     * 可前往地图自定义平台(https://lbs.amap.com/dev/mapstyle/index)定制自己的个性地图样式；
     * 第二种：官方样式模版,如"amap://styles/grey"。
     * 其他模版样式及自定义地图的使用说明见开发指南(https://lbs.amap.com/api/javascript-api/guide/map/map-style/?)
     */
    mapStyle?: String,
    /**
     * 设置地图上显示的元素种类
     * 支持'bg'（地图背景）、'point'（POI点）、'road'（道路）、'building'（建筑物）
     */
    features?: String[],
    /**
     * 设置地图显示3D楼块效果，移动端也可使用。推荐使用。
     */
    showBuildingBlock?: Boolean,
    /**
     * 默认为‘2D’，可选’3D’，选择‘3D’会显示 3D 地图效果。（自V1.4.0开始支持）
     */
    viewMode?: String,
    /**
     * 俯仰角度，默认0，[0,83]，2D地图下无效 。（自V1.4.0开始支持）
     */
    pitch?: Number,
    /**
     * 是否允许设置俯仰角度，3D视图下为true，2D视图下无效。（自V1.4.0开始支持）
     * 自v1.4.8开始，当此属性为false时，地图以初始属性设置的pitch值为倾斜角度，同时setPitch和鼠标手势交互操作将不能改变倾斜角度
     */
    pitchEnable?: Boolean,
    /**
     * 楼块出现和消失的时候是否显示动画过程，3D视图有效，PC端默认true，手机端默认false。（自V1.4.0开始支持）
     */
    buildingAnimation?: Boolean,
    /**
     * 调整天空颜色，配合自定义地图，3D视图有效，如‘#ff0000’。（自V1.4.0开始支持）
     */
    skyColor?: String,
    /**
     * 设置地图的预加载模式，开启预加载的地图会在适当时刻提前加载周边和上一级的地图数据，优化使用体验。该参数默认值true。  (自v1.4.4开始支持)
     */
    preloadMode?: Boolean,
}

interface MarkerBuffer {
    Markers: MarkerItem[]

    push(maker: any): void
    remove(key: string): MarkerItem
    clear(): void
    get(key: string): MarkerItem
    getMarkers(): any[]
    exists(key: string): Boolean
}

interface MarkerItem {
    key: string,
    marker: any
}


declare module "*/map.json" {
    const mapConfig: MapConfig;
    export default mapConfig;
}

interface MapConfig {
    center: number[],
    key: string,
    name: string,
    zoom: number,
    version: string,
}
