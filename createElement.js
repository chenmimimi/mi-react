function createElement( tag, attrs, ...children ) {
  return {
    tag,
    attrs,
    children,
  }
}
// 返回一个虚拟DOM，记录了这个DOM节点所有的信息，通过它我们可以生成真正的DOM

/**
 *  1. 拿到element
 *  2. babel转换
 *  3. 通过React.createElement返回虚拟DOM
*/

export default createElement;