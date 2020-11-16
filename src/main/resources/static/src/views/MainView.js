import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import Item from "../App";
import CarList from "../components/CarList";
import AppContext from "../context/context";
import logo from "../logo.svg";
import settings from "../img/settings.svg";
import Modal from "../components/Modal";

const App = styled.div`
  text-align: center;
`;

const AppLogo = styled.img`
height: 40vmin;
pointer-events: none;
`;

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
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

export const MainView = () => {
    return (
        <AppContext.Consumer>

            {(context) => {
                return (
                    <>
                        <App>

                            <AppHeader>
                                <AppLogo src={logo} className="App-logo" alt="logo"/>
                                <p>
                                    Cars List
                                </p>
                                <p> Add Car</p>
                                <StyledButton src={settings} onClick={context.openModal}/>
                                {context.isModalOpen &&
                                <Modal closeModal={context.closeModal} addCar={context.addCar}/>}
                            </AppHeader>
                            <CarList list={context.cars}
                                //      openModal={context.openModal}
                                //      deleteCar={context.deleteCar}
                                //      editCar={context.editCar}
                            />
                        </App>
                    </>
                )
            }
            }


        </AppContext.Consumer>
    )
}



