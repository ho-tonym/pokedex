import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import BotNav from '../containers/BotNav';

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component
}

const findByTestAttribute = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}

describe('App Component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('renders without crashing', () => {
      // console.log(component.debug())
      const className = findByTestAttribute(component, 'App')
      expect(className.length).toBe(1)
  });

  // it('should not render', () => {
  //     // console.log(component.debug())
  //     const className = findByTestAttribute(component, 'App')
  //     expect(className.length).toBe(0)
  //   });


});
