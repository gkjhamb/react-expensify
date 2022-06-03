import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component {
  state = {
    calenderFocussed: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
//    this.props.dispatch(setStartDate(startDate))
 //   this.props.dispatch(setEndDate(endDate))

  }
  onTextChange = (e) => {
    const text = e.target.value
    //this.props.dispatch(setTextFilter(e.target.value));
    this.props.setTextFilter(text)
  }

  onSortChange = (e) => {
    if (e.target.value === 'date') {
      //this.props.dispatch(sortByDate());
      this.props.sortByDate()
    } else if (e.target.value === 'amount') {
      //this.props.dispatch(sortByAmount());
      this.props.sortByAmount();
    }
  }
  onFocusChange =(focusedInput)=>{
    this.setState({ calenderFocussed: focusedInput })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocussed}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />

      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch)=>({
  setStartDate: (startDate)=>dispatch(setStartDate(startDate)),
  setEndDate: (endDate)=>dispatch(setEndDate(endDate)),
  setTextFilter :(text) =>dispatch(setTextFilter(text)),
  sortByDate: ()=>dispatch(sortByDate()),
  sortByAmount:()=>dispatch(sortByAmount())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
