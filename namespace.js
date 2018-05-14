// 题目描述
// 根据包名，在指定空间中创建对象
// input
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// output
// {a: {test: 1, b: {c: {d: {}}}}}

function namespace(oNamespace, sPackage) {
    var result = oNamespace;
    var property = sPackage.split('.');
    property.forEach(function(item) {
        if (oNamespace.hasOwnProperty(item)) {
            // 属性值为原始类型的值则设置为空对象
            if (typeof oNamespace[item] !== 'object') {
                oNamespace[item] = {};
            }
        } else {
            oNamespace[item] = {};
        }
        oNamespace = oNamespace[item];
    });

    return result;
}