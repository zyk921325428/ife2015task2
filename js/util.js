// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return arr instanceof Array;
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return fn instanceof Function;
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    if (typeof (src) != "object") {
        return src;
    } else {
        var cloneObj = Object.prototype.toString.call(src) == "object object" ? {} : [];
        for (var att in src) {
            cloneObj[att] = cloneObject(src[att]);//递归
        }
        return cloneObj;
    }
}


// 测试用例：
var srcObj = {
    d: Date,
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript",
        b3: { www: "hello", qqq: "hi" },
        b4: function () { }//测试
    }
};
var abObj = srcObj;
var tarObj1 = cloneObject(srcObj);
var tarObj2 = cloneObject(srcObj);

tarObj1.a = 2;
tarObj2.b.b1[0] = "Hi";
abObj.b.b1.push('ass:"abObj"');
tarObj2.b.b1.push('ass:"tarObj2"');

console.log(abObj.a);
console.log(abObj.b.b1[0]);
console.log(tarObj1.a);      // 1
console.log(tarObj1.b.b1[0]);    // "hello"
console.log(tarObj2.a);      // 1
console.log(tarObj2.b.b1[0]);    // "hello"
console.log(abObj.b.b1);
console.log(tarObj1.b.b1);
console.log(tarObj2.b.b1);
