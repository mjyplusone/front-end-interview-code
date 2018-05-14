// 题目描述
// 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
// 1. rgb 中每个 , 后面的空格数量不固定
// 2. 十六进制表达式使用六位小写字母
// 3. 如果输入不符合 rgb 格式，返回原始输入

// input
// 'rgb(255, 255, 255)'
// output
// #ffffff

// input
// 'rgb(0, 0, 0)'
// output
// #000000

function rgb2hex(sRGB) {
    var pattern = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/g;
    if (pattern.test(sRGB)) {
        return '#' + transform(RegExp.$1) + transform(RegExp.$2) + transform(RegExp.$3);
    } else {
        return sRGB;
    }
}

function transform(num) {
    var str = parseInt(num).toString(16);
    return ('00' + str).substr(str.length);
}

