// 题目描述
// 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。

function multiply(array)
{
    // write code here
    if (array.length <= 1) return;
    
    var result = [];
    result[0] = 1;
    for (var i = 1; i < array.length; i++) {
        result[i] = result[i - 1] * array[i - 1];
    }
    
    var tmp = 1;
    for (var i = array.length - 2; i >= 0; i--) {
        tmp *= array[i + 1];
        result[i] *= tmp;
    }
    
    return result;
}