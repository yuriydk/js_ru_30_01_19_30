import React, { Component } from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {filterByIds} from '../AC/'

class FilterByArticleIds extends Component {

    state = {
        from: null,
        to: null
    }

    handleSelectChange = selection => {
        this.props.filterByIds(selection.map(a => a.value))
    }

    render() {
        const {articles, ids} = this.props
        const allOptions = articles.map(a => ({
            label: a.title,
            value: a.id
        }));

        const options = [];
        const selection = [];
        for (let option of allOptions) {
            if(ids.some(id => option.value == id)){
                selection.push(option)
            } else {
                options.push(option)
            }
        }

        return (
            <Select options = {options} onChange={this.handleSelectChange} value={selection}  multi/>
        );
    }

}

export default connect(state => ({articles: state.articles , ids: state.filter.ids}), {filterByIds})(FilterByArticleIds)
