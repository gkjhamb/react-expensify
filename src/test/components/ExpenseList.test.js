import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import {ExpenseList} from '../../components/ExpenseList'

test('should render ExpenseList', ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render NO EXPENSE msg ExpenseList', ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

