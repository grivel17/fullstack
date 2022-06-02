import React, {Component} from 'react';
import axios from "axios";

class Form extends Component {

    userInputRef = React.createRef();

    state = { userName: ""}

    handelOnSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({userName: ""});
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handelOnSubmit}>
                    <input type="text"
                           placeholder="Github username"
                           ref={this.userInputRef}
                           onChange={event => this.setState({userName: event.target.value})}
                    />
                    <button>Add card</button>
                </form>

            </div>
        );
    }
}

export default Form;
