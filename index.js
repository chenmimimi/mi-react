import createElement from "./createElement";

const React = {
  createElement
}

const element = (
  <div>
      hello<span>world!</span>
  </div>
);

// const element = (
//   <div className="title">
//     hello<span>world</span>
//   </div>
// )
// babel将其转换成如下代码
// const element = React.createElement(
//   'div',
//   { className: 'title' },
//   'hello',
//   React.createElement(
//     'span',
//     {},
//     'world'
//   ),
// )

console.log( element );