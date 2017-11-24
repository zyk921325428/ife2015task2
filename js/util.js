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

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    if (arr === []) return arr;
    var uqarr = [];
    uqarr[0]=arr[0];
    for (var i = 1; i < arr.length; i++) {

     iuq:   for (var j = 0; j < uqarr.length; j++) {
            if (arr[i]===uqarr[j]) {
                break iuq;
            }else if(j==uqarr.length-1){
                uqarr.push(arr[i]);
            }
        }
    }
    return uqarr;
    // your implement
    //自己瞎想出来的，比较怪异，不会改变原数组
}

// //数组去重
// function uniqArray(arr) {
//     var uqarr=[];
//     for(var i=0;i<arr.length;i++){
//         uqarr[i]=arr[i];
//     }
//     for(i=0;i<uqarr.length;i++){
//         for(var j=i+1;j<uqarr.length;j++)
//             if(uqarr[i] === uqarr[j])
//             {
//                 uqarr.splice(j,1); //第二个参数为1，表示删除当前
//                 j--;	
//             }
//     }
//     return uqarr;
//   }


// 使用示例
var a = [1, 3, 5, 7,1, 5, 3,7];
var b = uniqArray(a);
console.log(a); // [1, 3, 5, 7]
console.log(b); // [1, 3, 5, 7]

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    // your implement
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
return str.replace(/^\s+|\s+$/g,"");
    // your implement
}

// 使用示例
var str = '   hi! 6464 ';
str = trim(str);
console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for (var i in arr) {
        if (arr.hasOwnProperty(i)) {
            fn(arr[i],i);
        }
    }
    // your implement
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) { 
    var i=0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
i++;
            
        }
    }
    return i;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3