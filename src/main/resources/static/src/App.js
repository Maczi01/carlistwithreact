import logo from './logo.svg';
import './App.css';
import {Api} from './utils/Api';
import React from 'react';

class App extends React.Component {

    state = {
        cars: [],
    };

    componentDidMount() {
        Api.getAllTimeboxes()
            .then((cars) => this.setState({cars}))
            .catch(error => console.log("Can not load data"));
    }


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Kaczka
                    </p>
                    {}
                    <ul>
                        {this.state.cars.map(e =>
                            <li> {e.mark}</li>
                        )}

                    </ul>
                </header>
            </div>
        );
    }
}

export default App;
