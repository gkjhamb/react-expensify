import filterReducers from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', ()=>{
    const filters = filterReducers(undefined, {type: '@@INIT'})
    expect(filters).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', ()=>{
    const state= filterReducers(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state).toEqual({
        text:'',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })

})

test('should set sortBy to date', ()=>{
    const currentState = {
        text: '',
        sortBy:'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }

    const state= filterReducers(currentState, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')

})

test('should set text filter', ()=>{
    const state = filterReducers(undefined, {type: 'SET_TEXT_FILTER', text:'Gulshan'})
    expect(state.text).toBe('Gulshan')

})

test('should test startdate Filter', ()=>{
    const state = filterReducers(undefined, {type: 'SET_START_DATE',  startDate: moment(23)})
    expect(state.startDate).toEqual(moment(23))
})


test('should test enddate Filter', ()=>{
    const state = filterReducers(undefined, {type: 'SET_END_DATE',  endDate: moment(23)})
    expect(state.endDate).toEqual(moment(23))
})