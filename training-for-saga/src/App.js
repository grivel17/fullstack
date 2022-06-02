import './App.css';
import {CardList} from "./githubApp/CardList";
import Form from "./githubApp/Form";


import React, {Component} from 'react';
import {StarMatch} from "./starMatchGame/StarMatch";

// const testData = [
//     {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//     {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//     {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         profiles: testData,
    //     }
    // }

    state = {
        profiles: [],
    };

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }));
    };

    //******************************************************



    render() {
        return (
            <div>
                {/*<Form onSubmit={this.addNewProfile}/>*/}
                {/*<CardList profiles={this.state.profiles} />*/}
                <StarMatch />
            </div>
        );
    }
}

export default App;

