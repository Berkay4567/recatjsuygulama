import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router} from 'react-router-dom';
import AddNew from './AddNew';

it("renders when there are no items", ()=>{
    const tree=renderer.create(<Router>
        <AddNew />
      </Router>
  ).toJSON();
    expect(tree).toMatchSnapshot();
})