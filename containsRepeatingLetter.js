// 题目描述
// 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false

// input 
// 'rattler'
// output
// true

//(\w)用来匹配任何除了换行和制表符的字符, 而\1是对(\w)的一个引用, 所以你可以理解成: (\w)\1 就是(\w)(\w)  
//但是,  
//(\w)\1 和 (\w)(\w)的不同之处在于,  (\w)(\w)表示任意两个连续的字符, 比如Ac, MM, K9, 都可以,  
// 但(\w)\1只能是AA, CC, 99 这样连续相同的字符  
function containsRepeatingLetter(str) {
    var pattern = /([a-zA-z])\1/;
    return pattern.test(str);
}
