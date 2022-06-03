import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'
import moment from 'moment'


test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', ()=>{
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: '1'})
    expect(state).toEqual([expenses[1], expenses[2]])
})

test('should not remove expense by id', ()=>{
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: '1er'})
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('should add an expense', ()=>{
    const newExpense = {
        description: 'new exp',
        amount: 34,
        createdAt: moment(0),
        id: 'some id',
        note:''
    }

    const state=expensesReducer(expenses, {type:'ADD_EXPENSE', expense: newExpense})
    expect(state).toEqual([...expenses, newExpense])
})

test('should edit an expense', ()=>{
    const updates={
        description: 'Gummer'
    }

    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: '1', updates})
    const expState = expenses
    expState[0].description='Gummer'
    expect(state).toEqual(expState)
})

test('should not edit an expense if id not found', ()=>{
    const updates={
        description: 'Gummer'
    }

    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: '134', updates})
    expect(state).toEqual(expenses)
})