import React, { PropTypes, Component } from 'react'
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/dist/style.css'

export default class DateRangePicker extends Component{
    state = {
        dayFrom: null,
        dayTo: null
    }

    static defaultProps = {
        onRangeSelected: function(range){}
    }

    static propTypes = {
        onRangeSelected: PropTypes.func.isRequired
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, { from: this.state.dayFrom, to: this.state.dayTo });

        const newState = {
            dayFrom: range.from,
            dayTo: range.to
        }

        if(newState.dayFrom && newState.dayTo){
            this.props.onRangeSelected(newState);
        }

        this.setState(newState);
    }

    renderDiapason() {
        const {dayFrom, dayTo} = this.state;
        if (!dayFrom || !dayTo)
            return null;

        const toStringOptions = { year: 'numeric', month: 'long', day: 'numeric'}
        return (
            <div>
                from <b>{dayFrom.toLocaleString('en', toStringOptions)}</b> to <b>{dayFrom.toLocaleString('en', toStringOptions)}</b>
            </div>
        )
    }

    render() {

        const { dayFrom, dayTo } = this.state;

        return (
            <div>
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={ day => DateUtils.isDayInRange(day, { from: dayFrom, to: dayTo }) }
                    onDayClick={this.handleDayClick} />
                {this.renderDiapason()}
            </div>
        )
    }
}
