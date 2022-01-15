import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router} from 'react-router-dom';
import Add from './Add';

it("renders when there are no items", ()=>{
    const tree=renderer.create(<Router>
        <Add />
      </Router>
  ).toJSON();
    expect(tree).toMatchSnapshot();
})