import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import store from '../store'
import Menu, {MenuItem} from './Menu'
import Link from './link'
import translation from '../translation'
import {setCurrentPath} from '../AC'

class Root extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        translate: translation('en')
    }

    static contextTypes = {
        router: PropTypes.object
    }

    static childContextTypes = {
        user: PropTypes.string,
        translate: PropTypes.func,
        ln: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.user,
        }
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <input value={this.state.user} onChange={this.handleUserChange} />
                    <Link params={{ln: 'ru'}}>Русский</Link>
                    <Link params={{ln: 'en'}}>English</Link>

                    <Menu>
                        <MenuItem path="/:ln/articles" title={this.state.translate('articles')}/>
                        <MenuItem path="/:ln/filters" title={this.state.translate('filters')}/>
                        <MenuItem path="/:ln/counter" title={this.state.translate('counter')}/>
                        <MenuItem path="/:ln/comments" title={this.state.translate('comments')}/>
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleUserChange = ev => {
        this.setState({
            user: ev.target.value
        })
    }
}

export default Root
