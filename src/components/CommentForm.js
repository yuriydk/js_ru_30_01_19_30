import React, {Component, PropTypes} from 'react'
import '../../style/CommentForm.css'

export default class CommentForm extends Component {
    state = {

    }

    static defaultProps = {
        onSave: function(formData){}
    }

    static propTypes = {
        onSave: PropTypes.func.isRequired
    }

    handleChange = field => ev => {
        this.setState({
            field: ev.target.value
        });
    }

    handleSubmit = ev => {
        ev && ev.preventDefault && ev.preventDefault();
        const form = ev.target;
        const formData = {
            user: form.commentUser.value,
            text: form.commentText.value
        }

        this.props.onSave(formData);

        form.reset();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="comment-form">
                <label htmlFor="commentUser">User: <input name="commentUser" id="commentUser" onChange={this.handleChange('user')} type="text" value={this.state.user}/></label>
                <label htmlFor="commentText">Comment: <input name="commentText" id="commentText" onChange={this.handleChange('text')} type="text" value={this.state.text}/></label>
                <button type="submit">Save</button>
            </form>
        );
    }
}
