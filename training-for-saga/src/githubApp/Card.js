import React, {Component} from 'react';
import './Card.css'


class Card extends Component {

    render() {
        const profile = this.props;
        return (
            <div className="githubprofile">
                <img src={profile.avatar_url} />
                <div>Name {profile.name}</div>
                <div>companey {profile.company}</div>
                One githubCard...
            </div>
        );
    }
}

export default Card;
