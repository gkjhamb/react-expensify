import ExpenseForm from '../../components/ExpenseForm'
import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import moment from 'moment'


test('should render the ExpenseForm', ()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render the ExpenseForm with data', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    })
   expect(wrapper.state().error.length).toBeGreaterThan(0)
   expect(wrapper).toMatchSnapshot()
})

test("should set description on input change",()=>{
    const wrapper = shallow(<ExpenseForm />)
    const inr = wrapper.find('input').at(0).simulate('change', {target:{value: 'Test'}})
    expect(wrapper.state().description).toBe('Test')

})

test("should set note on note change",()=>{
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {target:{value: 'Test'}})
    expect(wrapper.state().note).toBe('Test')

})

test("should set amount for valid input",()=>{
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {target:{value: '123.45'}})
    expect(wrapper.state('amount')).toBe('123.45')

})

test("should NOT set amount for Invalid input",()=>{
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {target:{value: '123.4565'}})
    expect(wrapper.state('amount')).toBe('')

})

test('should call onSubmit prop for successful submission', ()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense ={expenses[0]} onSubmit = {onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: moment(expenses[0].createdAt).valueOf()
    })

})  


test('should set new date on date change', ()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calender focus onfocuschange', ()=>{
    let focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toBe(focused)
}) 