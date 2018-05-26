// 题目描述
// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
// 输入描述:
// 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。

function Permutation(str)
{
    // write code here
    var result = [];
    if (str.length == 0) return result;
    
    permutationStr(str, []);
    
    function permutationStr(str, sort) {
        for (var i = 0; i < str.length; i++) {
            var first = str[i];
            var remain = str.slice(0, i) + str.slice(i + 1);
            sort.push(first);
            if (remain.length > 0) {
                permutationStr(remain, sort);
                sort.pop();
            }
            else {
                result.push(sort.slice(0).join(''));
                sort.pop();
            }
        }
    }
    
    // 最后注意去重
    // 特例：input aa output aa (不去重会输出aa aa)
    return Array.from(new Set(result));
}

