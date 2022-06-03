import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import {EditExpensePage} from '../../components/EditExpensePage'

let editExpense, history, removeExpense, wrapper

beforeEach(()=>{
    editExpense=jest.fn();
    history={push:jest.fn()}
    removeExpense=jest.fn()
     wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} expense = {expenses[0]} removeExpense={removeExpense} history ={history}/>)
})

test('should render EditExpensePage', ()=>{
    expect(wrapper).toMatchSnapshot()

})

test('should render editExpense', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])

})

test('should handle remove expense', ()=>{
    wrapper.find('button').prop('onClick')(expenses[0].id)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[0].id})
})