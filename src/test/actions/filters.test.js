import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters'
import moment from 'moment'

test('should generate SetStartDate acton object', ()=>{
    const startDate = moment().valueOf()
    const action =setStartDate(startDate)
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate
    })
})

test('should generate SetEndDate acton object', ()=>{
    const endDate = moment().valueOf()
    const action =setEndDate(endDate)
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate
    })
})

test('should generate action for SetTextFilter with provided test', ()=>{
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('should generate action for SetTextFilter with default values test', ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate SortByAmount action object', ()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})


test('should generate SortByDate action object', ()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})