
import { _render } from './_render'

const ReactDOM = {
  render: ( vnode, container ) => {
    container.innerHTML = '';
    return _render( vnode, container );
  }
}

export default ReactDOM ;

 
