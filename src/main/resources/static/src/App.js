import logo from './logo.svg';
import './App.css';
import {Api} from './utils/Api';
import React from 'react';
import Item from "./components/Item";

class App extends React.Component {

    state = {
        cars: [],
    };

    componentDidMount() {
        Api.getAllTimeboxes()
            .then((cars) => this.setState({cars}))
            .catch(error => console.log("Can not load data"));
    }

    deleteCar = (indexToRemove) =>{
        Api.removeTimebox(indexToRemove).then(this.setState(prevState => {
            const cars = this.state.cars.filter((user, index) => user.id !== indexToRemove)
            return {cars}
        }))
    }


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Cars List
                    </p>
                    <ul>
                        {this.state.cars.map(e =>
                            <Item id={e.id} mark={e.mark} model={e.model} deleteCar ={() => this.deleteCar(e.id)}> </Item>
                        )}

                    </ul>
                </header>
            </div>
        );
    }
}

export default App;
