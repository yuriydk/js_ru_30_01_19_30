import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import translation from '../translation'

class Translate extends React.Component {
    static contextTypes = {
        ln: PropTypes.string,
        router: PropTypes.object
    }

    render () {
        return <span>{translation(this.context.router.params.ln)(this.props.children)}</span>
    }
}

export default connect(state=>({pathname: state.pathname}))(Translate);
