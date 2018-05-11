import * as React from 'react';
// import { Component } from 'react';
import * as ReactDOM from 'react-dom';
// import { findRenderedDOMComponentWithClass, renderIntoDocument, Simulate } from 'react-dom/test-utils';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// it('should start with 1', () => {
//   const app = renderIntoDocument(<App />) as Component<any, {}, any>;
//   const count = findRenderedDOMComponentWithClass(app, "count");
//   expect(count.textContent).toEqual("  1");
// });

// it('should count 2 and 3', () => {
//   const app = renderIntoDocument(<App />) as Component<any, {}, any>;
//   const counter1 = findRenderedDOMComponentWithClass(app, "counter-1");
//   const counter2 = findRenderedDOMComponentWithClass(app, "counter-2");
//   const counter3 = findRenderedDOMComponentWithClass(app, "counter-3");
//   const count = findRenderedDOMComponentWithClass(app, "count");
//   Simulate.click(counter1);
//   expect(count.textContent).toEqual("  2");
//   Simulate.click(counter2);
//   expect(count.textContent).toEqual("  4");
//   Simulate.click(counter3);
//   expect(count.textContent).toEqual("  7");
// });