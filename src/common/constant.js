/*
 * @Author: zhengxiaoxiao
 * @Date: 2020-10-16 10:49:39
 * @Description: 
 */
export function test123() {
    // console.log(import.meta,"fff")
}

// 构造函数：props使用
export function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// 重写call 
export let myCall = function() {
    let _fn = this
	if (typeof _fn !== 'function') {
		throw new TypeError('error')
	}
	console.log(arguments, "arguments")//this,1,2,3,4
	let ctx = [...arguments].shift()//this

	// call使用的多个入参的方式，所有直接取参数第二个参数开始的所有入参，包装成一个数组
	let args = [...arguments].slice(1)
	//  给this对象添加属性
	ctx.myCallFn = _fn
	console.log(ctx, "ctx")
	let res = ctx.myCallFn(...args)
	delete ctx.myCallFn
	return res
}