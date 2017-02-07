import React from 'react'

export default (Component) => class Wrapper extends React.Component {
    state = {
        openItemId: null
    }

    toggleOpenItem = openItemId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            openItemId: this.state.openItemId == openItemId ? null: openItemId
        })
    }
    render(){
        return <Component {...this.props} {...this.state} toggleOpenItem={this.toggleOpenItem}/>
    }
}
