interface String {
    /**
     *获取汉字的拼音首字母
     *
     * @returns {string}
     * @memberof String 汉字字符串，如果遇到非汉字则原样返回
     */
    getFirstLetter(): string;
}