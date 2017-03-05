import {Link as RoutLink} from 'react-router'
import pathToRegexp from 'path-to-regexp'
import React, { PropTypes } from 'react'
import {connect} from 'react-redux'

class Link extends React.Component {
    
    static contextTypes = {
        router: PropTypes.object,
    }

    render () {
        const params = {...this.context.router.params};

        for (var paramName in this.props.params || {}) {
            params[paramName] = this.props.params[paramName]
        }
        let toTemplate = this.props.to
        if(!toTemplate){
            toTemplate = this.context.router.routes.reduce((sum, r, index) => {
                if(index == 0 || !r.path)
                    return sum
                if(r.path.startsWith('/'))
                    return r.path
                return sum + '/'+ r.path
            }, "")
        }

        const to = pathToRegexp.compile(toTemplate)(params)

        return <RoutLink activeStyle={this.props.activeStyle} to={to}>{this.props.children}</RoutLink>
    }
}

export default connect(state=>({pathname: state.pathname}))(Link);
