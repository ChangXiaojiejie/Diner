// 导入基础包
import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoreContainer, CoreService, NavLayoutComponent, BICheckboxDirective, DialogComponent } from "@reco/core";
import { TagService } from "@reco/tag-service";
import { ParkCatalogueService } from "@reco/park-service";

// 导入自定义的包
import { StockService } from "../Service/index";
// import { StockSendEditComponent } from ".";
import { StockSliderComponent } from "./stock.slider";

@Component({
    selector: "stock-container",
    templateUrl: "./stock.container.html"
})



export class StockContainerComponent extends CoreContainer implements OnInit {
    park: any;
    private _map: any = {};
    private _lastSearch: any ;
    private _navTypes: any[]

    parks: any[]

    constructor(
        // 传入当前组件的service
        private _contctService: StockService,
        // 延迟加载
        layout: NavLayoutComponent,
        private _parkService: ParkCatalogueService,
        // 路由
        private _route: ActivatedRoute,
        private _router: Router,
        // 标签
        private _tagService: TagService
    ) {
        super(_contctService, "stock-container", layout);
        // 实现左边导航的切换的功能
        this._navTypes = _contctService.getNavTypes();

        this._parkService.getAllParks({ BindTableName: "STDContact" }).success((d: any[]) => {
            d.unshift((this.park = { ParkName: "不限" }));
            this.parks = d;
        });
    }
    @ViewChild('slider')
    slider: StockSliderComponent
    
    // 初始化配置
    ngOnInit(): void {
        super.ngOnInit();
        
        // 检查路由
        this.subscribeProxy(this.layout.routerChange$, () => this.checkRouter())
        
        this.submitSearch();
        this.activeSearch();

        // console.log(this.slider['elementRef']['nativeElement'])

        // console.log(all)
        // console.log(this.all)
        
    }

    


    checkRouter() {
        // 获取地址栏中的路由
        const type = this._route.snapshot.queryParamMap.get('type');
         // 判断值是否有效
         if (type && !this._navTypes.find(b => b.value === +type)) {
             // 将地址栏中的路由改为 null
            this._router.updateParams({type: null})
         }
    }

    /**
     * 初始化数据
     * 
     */
    onLoadPage(info?: any, ...args: any[]) {
        // 获取联系人的类型
        /**
         * 1. 首先调用了 _tagService中的 getTagByTagClass的方法
         * 2. 当请求成功，在success中的使用回调函数，在回调函数中通过forEach遍历数据
         */
        this._tagService.getTagByTagClass("Contact/ContactType").success((d: any[]) => {
            d.forEach(item => (this._map[item.TagValue] = item.TagName));
        })
    }

    /**
     * 模糊查询
     * 
     * 参数1：当前的DOM标签
     * 参数2：输入的关键字 
     */
    searchKey(input: HTMLInputElement, key: string) {
        
        // console.log(input)  // 输入的标签
        // console.log(key)  // BindTableValue


        // 判断当前输入的参数和DOM节点上的参数值是否一致？ 即是否需要更新查询的关键字
        if (this.searchParams[key] === input.value) return;

        // 把DOM上的值设置给当前的ng元素
        this.searchParams[key] = input.value;
        // console.log(this.searchParams[key])
        // 如果定时器存在，则清除定时器
        if (this._lastSearch) clearTimeout(this._lastSearch);
        // 重新声明一个定时器，设置延迟600ms
        const lastSearch = (this._lastSearch = setTimeout(() => {
            if (lastSearch === this._lastSearch) this.onSearchPage();
        }, 600));
    }
    /**
     * 获取查询参数
     * 形参：params
     * params 如果传入了值，则使用传入的值，否者params的值为 null
     * 传入的值可以为任意类型或者任意类型的数组
     */
    getSearchParams(params: { [key: string]: any | any[] } | null) {
     
        // 获取查询字符串
        const queryParams = this._route.snapshot.queryParamMap,
        // 获取类型
            type = queryParams.get("type");
            // console.log("调用" );
         
        // 调用父类中的getSearchParams方法
        params = super.getSearchParams(params);
        /**
         * this._navTypes.find(b => b.value === +type)  用于判断导航的类型，如果有效，则取出导航的类型的字符串名称
         * 如果导航的类型有效，则params.BindTableName的值为侧边的导航的名称
         */
        
        type && (params.BindTableName = (this._navTypes.find(b => b.value === +type) || {}).text);
        // 判断 params 是否为为默认值
        params.IsDefault = queryParams.get("IsDefault") || undefined;
        // console.log(params)
        return params;
    }

}


