import React from 'react';
import renderer from 'react-test-renderer'
import { BrowserRouter as Router} from 'react-router-dom';
import CardDetails from './CardDetails';

it("renders when there are no items", ()=>{
    const tree=renderer.create(<Router>
        <CardDetails />
      </Router>
  ).toJSON();
    expect(tree).toMatchSnapshot();
})