import React from 'react';
import ReactDOM from 'react-dom';
import PartList from './PartList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PartList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
