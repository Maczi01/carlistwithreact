import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import Item from "../App";
import CarList from "../components/CarList";


const ViewWrapper = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   width: 80vw;
`;


export const MainView = () =>
    <AppContext.Consumer>
        <ViewWrapper>
            {(context) => (
                <CarList list={context.movieList}
                         openModal={context.openModal}
                         deleteCar={context.deleteCar}
                         editCar={context.editCar}
                />

            )}
        </ViewWrapper>
    </AppContext.Consumer>
