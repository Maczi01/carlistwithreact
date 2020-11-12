import logo from './logo.svg';
import './App.css';
import {Api} from './utils/Api';
import React from 'react';
import Item from "./components/Item";
import settings from './img/settings.svg'
import styled from 'styled-components'
import Modal from "./components/Modal";

const StyledButton = styled.img`
    margin: 0 30px;
    margin-bottom: 20px;
    border-radius: 3px;
  background-color: #282c34;
    padding: 5px;
    height: 40px;
    width: 40px;
    justify-content: space-around;
`

class App extends React.Component {

    state = {
        cars: [],
        isModalOpen: false,

    };

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })

    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    componentDidMount() {
        Api.getAllTimeboxes()
            .then((cars) => this.setState({cars}))
            .catch(error => console.log("Can not load data"));
    }

    deleteCar = (indexToRemove) => {
        Api.removeTimebox(indexToRemove).then(this.setState(prevState => {
            const cars = this.state.cars.filter((user, index) => user.id !== indexToRemove)
            return {cars}
        }))
    }


    addCar = (car) => {
        Api.addUser(car)
            .then(() => Api.getAllTimeboxes())
            .then(cars => this.setState({cars}))
    };


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Cars List
                    </p>
                    <p> Add Car</p>
                    <StyledButton src={settings} onClick={this.openModal}/>


                    <ul>
                        {this.state.cars.map(e =>
                            <Item key={e.id} id={e.id} mark={e.mark} model={e.model}
                                  deleteCar={() => this.deleteCar(e.id)}> </Item>
                        )}

                    </ul>
                    {this.state.isModalOpen && <Modal closeModal={this.closeModal} addCar={this.addCar}/>}
                </header>
            </div>
        );
    }
}

export default App;
