function _render( vnode, container ) {
    
  // 当vnode为字符串时，渲染结果是一段文本
  if ( typeof vnode === 'string' ) {
      const textNode = document.createTextNode( vnode );
      return container.appendChild( textNode );
  }

  const dom = document.createElement( vnode.tag );

  vnode.children.forEach( child => _render( child, dom ) );    // 递归渲染子节点

  return container.appendChild( dom );    // 将渲染结果挂载到真正的DOM上
}

export { _render };
