import logo from './logo.svg';
import './App.css';
import {Api} from './utils/Api';
import React from 'react';
import Item from "./components/Item";
import settings from './img/settings.svg'
import styled from 'styled-components'
import Modal from "./components/Modal";
import ModalForEdit from "./components/ModalForEdit";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EditCarView from "./views/EditCarView";
import {MainView} from "./views/MainView";
import AppContext from "./context/context";




class App extends React.Component {

    state = {
        cars: [],
        isModalOpen: false,
        isModalEditOpen: false,
        currentMark: null,
        currentModel: null,
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
    openModalEdit = () => {
        this.setState({

            isModalEditOpen: true,
        })

    }

    closeModalEdit = () => {
        this.setState({
            isModalEditOpen: false,
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


    editCar = (mark, model) => {
        // console.log(mark, model)
        // Api.replaceTimebox({mark, model})
        //     .then((updatedAsset) => this.setState(prevState => {
        //             return {
        //                 assets: [
        //                     ...prevState.assets.map(u =>
        //                         u.id === updatedAsset.id ? updatedAsset : u
        //                     )]
        //             };
        //         })
        //     );
    };


    render() {
        const {cars, isModalOpen} = this.state;
        const contextElement = {
            cars: this.state.cars,
            openModal: this.openModal,
            isOpenModal: this.state.isModalOpen,
            deleteCar: this.deleteCar,
            editCar: this.deleteCar,
            addCar: this.addCar
        }
        return (
            <>

                <Router>
                    <AppContext.Provider value={contextElement}>

                        {/*<Route path="/editcar:id" component={EditView}/>*/}

                        <Route exact path="/" component={MainView}/>
                        <Route path="/editcar" component={EditCarView}/>
                    </AppContext.Provider>
                </Router>
            </>
        );
    }
}

export default App;
