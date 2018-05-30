// 题目描述
// 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。
// 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配

//s, pattern都是字符串
function match(s, pattern)
{
    // write code here
    if (s == null || pattern == null) return false;
    if (pattern[0] == '*' && pattern[1] != '*') return false;
    
    var i = 0, j = 0;
    while (i < s.length && j < pattern.length) {
        if (pattern[j + 1] != '*') {
            if (pattern[j] == '.' || s[i] == pattern[j]) {
                i++;
                j++;
            } else {
                return false;
            }
        } else {
            if (s[i] != pattern[j] && pattern[j] != '.') {
                j += 2;
            } else {
                // 尝试匹配
                i++;
                var flag = match(s.slice(i), pattern.slice(j));
                if (flag == false) {
                    i--;
                    j += 2;
                }
            }
        }
    }
    if (i == s.length && j == pattern.length) return true;
    // pattern剩余'.*'的情况
    else if (i == s.length && j != pattern.length) {
        var tmp = pattern.slice(j);
        if (tmp.length % 2 == 0) {
            for (var i = 0; i < tmp.length; i++) {
                if (i % 2 != 0) {
                    if (tmp[i] != '*') return false;
                }
            }
            return true;
            } else {
                return false;
            }
    }
    else return false;
}

// console.log(match('a', '.*'));
