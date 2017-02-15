import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import {filterByDate} from '../AC/'
import 'react-day-picker/lib/style.css';

class FilterByDateRange extends Component {

    static propTypes = {
        range: PropTypes.shape({from: PropTypes.date, to: PropTypes.date}).isRequired
    }

    handleDayClick = (e, day) => {
        var range  = DateUtils.addDayToRange(day, this.props.range);
        this.props.filterByDate(range);
    }

    resetFilter = (ev) => {
        ev && ev.preventDefault && ev.preventDefault()
        this.props.filterByDate({from: null, to: null})
    }

    render() {
        const { from, to } =  this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
                <button onClick={this.resetFilter}>reset date filter</button>
            </div>

        );
    }

}

export default connect(state => ({range: state.filter.range}), {filterByDate})(FilterByDateRange)
