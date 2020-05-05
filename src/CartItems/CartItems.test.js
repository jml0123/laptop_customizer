import React from 'react';
import ReactDOM from 'react-dom';
import CartItems from './CartItems';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartItems />, div);
  ReactDOM.unmountComponentAtNode(div);
});
