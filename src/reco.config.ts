export const client = (window["client"] = {
    title: "BiPark智慧园区信息化管理平台",
    companyTitle: "上海瑞谷拜特软件技术有限公司",
    companyLogo: { src: "//assets.bitech.cn/assets/images/login_10.jpg" },
    // productLogo: { src: "//assets.bitech.cn/assets/images/login_07.png" },
    techSupport: "技术支持: 上海瑞谷拜特软件技术有限公司",
    urlArgs: "v=180427",
    avatar: {
        default: "//assets.bitech.cn/assets/images/loggeduser.png",
        accept: "image/gif,image/jpg,image/jpeg,image/bmp,image/png",
        fileType: /^image\/\w+$/,
        fileTypeErrorMsg: "请选择有效图片！",
        maxSize: 1024 * 1024 * 2,
        sizeErrorMsg: "选择的文件文件不能大于2M！"
    },
    skinPath: "//assets.bitech.cn/assets/css/skin/1.0.2/",
    Assets: {
        Js: [
            "//assets.bitech.cn/assets/js/jquery-mousewheel/jquery.mousewheel",
            "//assets.bitech.cn/assets/js/jquery.mcustomscrollbar/jquery.mcustomscrollbar",
            ["//assets.bitech.cn/assets/js/select2/select2.min", "//assets.bitech.cn/assets/js/select2/i18n/zh-cn"],
            "//assets.bitech.cn/assets/js/lobibox/lobibox.min",
            "//assets.bitech.cn/assets/js/webuploader/webuploader.min",
            "//assets.bitech.cn/assets/js/my97datepicker/wdatepicker",
            "//assets.bitech.cn/assets/js/jquery-toggles/toggles.min",
            "//assets.bitech.cn/assets/js/jquery.qrcode/jquery.qrcode.min",
            "//assets.bitech.cn/assets/js/jquery.qrcode/jquery.qrcode.reimg"
        ],
        Css: []
    },
    /**是否是多园区 */
    IsMultiPark: true
});

export const server = (window["server"] = {
    rsa: {
        PublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCPiSHYTBetV+oT/25yEv+sQ0JD
GF5Zo11PjalshZCTFW6oZ/zOKNyg40t/lGtDDrb5DOzeIKL2F5tsd2mvjpR0NVyz
r3O1biH3rorm7zc+udqndK0EM/jIipanXCJgo/7VG7j1Bxxkq3+3Jo/4xBAwXc3l
f9Owr86KtF9z7MdVrwIDAQAB
-----END PUBLIC KEY-----`
    },
    ApiKey: "Bitech\\PC",
    Secret: "44678314ba0efa0c",
    url: location.port ? "//localhost:65425/" : "",
    isPreview: false,
    isOpenMutiParks: true,
    isOnlineEditCharge: true,
    ParkID: null,
    z6: {}
});

export function initConfig() {
    // tslint:disable-next-line:forin
    for (const key in client) {
        const value = client[key],
            obj = document.getElementById(key);
        if (obj) {
            if (typeof value === "object") {
                for (const objKey in value) obj[objKey] = value[objKey];
            } else obj.innerText = value;
        }
    }
}

initConfig();
