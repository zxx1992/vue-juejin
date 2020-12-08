/*
 * @Author: zhengxiaoxiao
 * @Date: 2020-12-03 16:27:11
 * @Description: va
 */


let url = 'https://edoc.clinicalservice.cn/edoc/license/info';
let opt = {
    method: 'get'
}
//  fetch 请求
export var promise = fetch(url, opt).then(function (response) {
    return response.json()
}).catch(function (err) {
    console.log(err, "err")
})


// ajax
// 1.是XMLHTTPRequest的一个实例

// 2.只有当状态为200或者304时才会请求成功

// 3.格式零散，容易出现回调地狱的问题

// fetch
// 1.fetch是基于promise实现的，也可以结合async/await

// 2.fetch请求默认是不带cookie的，需要设置fetch（URL，{credentials:’include’})。 

// Credentials有三种参数：same-origin，include，*

// 3.服务器返回400 500 状态码时并不会reject，只有网络出错导致请求不能完成时，fetch才会被reject

// 4.所有版本的 IE 均不支持原生 Fetch

// 5.fetch是widow的一个方法
// fetch和ajax 的主要区别
// 1、fetch()返回的promise将不会拒绝http的错误状态，即使响应是一个HTTP 404或者500 
// 2、在默认情况下 fetch不会接受或者发送cookies

// 使用fetch开发项目的时候的问题
// 1、所有的IE浏览器都不会支持 fetch()方法
// 2、服务器端返回 状态码 400 500的时候 不会reject


// promise 对象实现ajax操作的例子

export const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status == 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText))
            }
        }
        // client.responseType = "json";
        // client.setRequestHeader("Accept", "application/json");
        client.send();
    })
    return promise;
}

// class 类 ，类的继承
class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}
// 子类继承父类，必须在construtor中调用super方法
export class ColorPoint extends Point {
    constructor(x, y, color) {
        console.log(x,y,"xythis")
        super(x,y);
        this.color = color;
        console.log(this,x,y,"xythis")
    }
}