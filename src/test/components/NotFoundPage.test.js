import React from 'react'
import NotFoundPage from '../../components/NotFoundPage'
import { shallow } from 'enzyme'

test('should correctly render NotFoundPage page', ()=>{
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})