import React from 'react'
import {shallow} from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper
beforeEach(()=>{
    setTextFilter=jest.fn();
    sortByAmount=jest.fn();
    sortByDate = jest.fn();
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    wrapper  =shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}/>)
})

test('should render ExpenseListFilters', ()=>{
    expect(wrapper).toMatchSnapshot()

})

test('should render ExpenseListFilters with altData correctly', ()=>{
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot()

})

test('should handle text change', ()=>{
    let text = 'ho gaya'
    wrapper.find('input').simulate('change', {
        target:{
            value:text
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(text)
})

test('should sort by date', ()=>{
    wrapper.find('select').simulate('change',{
        target:{value: 'date'}
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', ()=>{
    wrapper.find('select').simulate('change',{
        target:{value: 'amount'}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', ()=>{
    let startDate = moment(0)
    let endDate = moment(0).add(3, 'days')
        
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate,
        endDate
    })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus change', ()=>{
    let focussedInput =  'startDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(focussedInput)
    expect(wrapper.state('calenderFocussed')).toEqual(focussedInput)
})