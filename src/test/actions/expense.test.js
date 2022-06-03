import {addExpense, removeExpense, editExpense} from '../../actions/expenses'

test('should setup removeExpense Action onject', ()=>{
    let result = removeExpense({id:'test12'})
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'test12'
    })

})

test('should test the editExpense action object', ()=>{
    let updates = { description: 'The book', amount: 1200}
    let result = editExpense('test12', updates)
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'test12',
        updates})
})

test('should setup action object with provided values', ()=>{
    const expense = {
        description: 'test',
        amount: 123,
        createdAt: 12,
        note: 'This was my note'
    }
    let action = addExpense(expense)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        
        expense:{
            description: 'test',
        amount: 123,
        createdAt: 12,
        note: 'This was my note',
        id: expect.any(String)
        }

    })

})

test('should setup action object with default values', ()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description:'',
            amount:0,
            createdAt: 0,
            note:'',
            id: expect.any(String)

        }
    })
})