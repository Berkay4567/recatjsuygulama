import React from 'react';
import renderer from 'react-test-renderer'
import { BrowserRouter as Router} from 'react-router-dom';
import Cards from './Cards';

it("renders when there are no items", ()=>{
    const tree=renderer.create(<Router>
        <Cards />
      </Router>
  ).toJSON();
    expect(tree).toMatchSnapshot();
})