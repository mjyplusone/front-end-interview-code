function myParseInt(str, radix = 10) {
    if (typeof str != 'string' && typeof str != 'number') {
        return NaN
    }
    if (typeof radix != 'number' || radix < 2 || radix > 36) {
        return NaN;
    }

    //parseInt忽略字符串前面的空格，直到找到第一个非空格字符
    str = String(str).trim().split('.')[0];

    if (!str.length) return NaN;

    // 处理0x开头的16进制和0开头的8进制
    if (str[0] === '0' && str[1].toLowerCase() === 'x') {
        radix = 16;
        str = str.slice(2);
    } else if (str[0] === '0') {
        radix = 8;
        str = str.slice(1);
    }

    let result = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str.charCodeAt(i);
        // 大小写字母转换为数字
        if (ch >= 97) {
            ch -= 87;    // - 'a' + 10
        } else if (ch >= 65) {
            ch -= 55;    // - 'A' + 10
        } else {
            ch -= 48;    // - '0'
        }
        // 如果字母转化后的值大于进制数，则跳出循环返回之前的结果
        if (ch >= radix) {
            // 第一个字符不是数字，返回NaN
            if (i === 0) {
                return NaN;
            }
            break;
        }
        // 结果累加，和进制相关
        result = (result * radix) + ch;
    }

    return result;
}

console.log(myParseInt('1234blue'));  // 1234
console.log(myParseInt(' '));  // NaN
console.log(myParseInt(22.5));  // 22
console.log(myParseInt('70'));  // 70
console.log(myParseInt('AF', 16));  // 175
console.log(myParseInt('AF'));  // NaN

console.log(myParseInt('0xA'));  // 10
console.log(myParseInt('070'));  // 56
console.log(myParseInt('0xAF', 16));  // 175
